<template>
  <div class="login">
    <h1>Redireccionado...</h1>

  </div>
</template>

<script>

function sendAuthCodeToServer(authCode) {
  let newURL = new URL("https://www.serverlog.somee.com/api/Usuarios/login"); 
  newURL.searchParams.set('authCode', authCode)
  const requestOptions = {
    method: "POST",
    mode: 'no-cors'
  };

  fetch(newURL , requestOptions)
    .then((response) => {
      console.log(response)
      if (response.status == 200) {
        response.json().then((json) => {
          this.userData = json
          this.$router.push("/user");
        }).catch((error) => {
          console.error("Error en el parse a json en login ", error)
        })

      } else if (response.status == 404) {
        this.requireRegister = true;
        this.$router.push("/home");
      } else if (response.status == 400) {
        this.requireRegister = false;
        console.error("Error interno...", response)
        this.$router.push("/home");
        }else {
        console.error("Estatus no manejada", response)
      }
    }).catch((error) => {
      console.error("Error en la peticion", error)
    })
}

function handleError(err) {
  console.error("Error en el redirect de transmit", err);

}

export default {
  name: 'LoginView',
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
      .then(res => {
        if (!this.requireRegister) {
          console.log("Enviando codigo al server", res)
          sendAuthCodeToServer(res.code);
        }else{
          console.log("Requiere Registrarse", res)
          this.authCode = res.code;
          this.$router.push("/register");
        }
      },
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