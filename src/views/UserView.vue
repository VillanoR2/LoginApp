<template>
  <div class="user">
    <h1>Redireccionado Test</h1>
    Datos de Usuario (Pagina de prueba)
    <UserPage msg="Welcome to Your Vue.js App" />

  </div>
</template>

<script>
import UserPage from '@/components/UserPage.vue'

function sendAuthCodeToServer(authCode) {
  console.log(authCode);
  //grant_type=authorization_code&code=[AUTH_CODE]&redirect_uri=[REDIRECT_URI]&client_id=[CLIENT_ID]&client_secret=[CLIENT_SECRET]
  var details = {
    'grant_type': 'authorization_code',
    'code': authCode,
    'redirect_uri': 'https://loginapp-three.vercel.app/user',
    'client_id': 'fb355573.417b53dd.tid_414530e0.bindid.io',
    'client_secret': '275577f6-fec4-459f-8e74-4598cad97294'
  };

  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  const requestOptions = {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "https://signin.bindid-sandbox.io/",
    "Access-Control-Allow-Methods": "POST" }),
    body: formBody
  };

  fetch("https://signin.bindid-sandbox.io/token", requestOptions)
  .then((response) => {
    if(response.ok){
      response.json((json) => {
        console.log(json)
      }).catch((error) =>{
        console.error("Error al parsear Json",error)
      })
    }else{
      console.error("Respuesta no soportada", response);
    }
  }).catch((error) =>{
        console.error("Error en la peticion",error)
      })
}
function handleError(err) {
  console.log(err);

}

export default {
  name: 'UserView',
  components: {
    UserPage
  },
  data() {
    return {
      nombre: ""
    }
  },
  mounted() {
    let metaOne = document.createElement("meta");
    metaOne.setAttribute("name", "xm-bind-id-client_id");
    metaOne.setAttribute("content", "fb355573.417b53dd.tid_414530e0.bindid.io");
    metaOne.setAttribute("id", "metaTransmitOneRecive");
    document.head.appendChild(metaOne);

    let scriptOne = document.createElement("script");
    scriptOne.setAttribute("src", "https://polyfill.io/v3/polyfill.min.js?features=Promise%2CPromise.prototype.finally%2CTextDecoder%2CTextEncoder%2CObject.entries");
    scriptOne.setAttribute("id", "scrpitTransmitOneRecive");
    document.head.appendChild(scriptOne);

    let scriptTwo = document.createElement("script");
    scriptTwo.setAttribute("src", "https://signin.bindid-sandbox.io/bindid-sdk/transmit-bind-id-sdk.js");
    scriptTwo.setAttribute("id", "scrpitTransmitTwoRecive");
    scriptTwo.defer = true
    document.head.appendChild(scriptTwo);

    window.XmBindId.processRedirectResponse()
      .then(res => { sendAuthCodeToServer(res.code); },
        err => { handleError(err); })

  },
  unmounted() {
    let scriptOne = document.getElementById("scrpitTransmitOneRecive")
    document.head.removeChild(scriptOne);

    let scriptTwo = document.getElementById("scrpitTransmitTwoRecive")
    document.head.removeChild(scriptTwo);

    let metaOne = document.getElementById("metaTransmitOneRecive")
    document.head.removeChild(metaOne);

  },
  methods: {
  }
}

</script>