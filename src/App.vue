<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="@/assets/logo.png" alt="..." height="36">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <button class='xm-bind-id-button'>Login</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <router-view/>
</template>

<script>
export default {
    data() {
        return {
            nombre: ""
        }
    },
    // mounted() {
    //     let metaOne = document.createElement("meta");
    //     metaOne.setAttribute("name", "xm-bind-id-client_id");
    //     metaOne.setAttribute("content", "fb355573.417b53dd.tid_414530e0.bindid.io");
    //     metaOne.setAttribute("id", "metaTransmitOne");
    //     document.head.appendChild(metaOne);

    //     let metaTwo = document.createElement("meta");
    //     metaTwo.setAttribute("name", "xm-bind-id-redirect_uri");
    //     metaTwo.setAttribute("content", "https://loginapp-three.vercel.app/user");
    //     metaTwo.setAttribute("id", "metaTransmitTwo");
    //     document.head.appendChild(metaTwo);

    //     let scriptOne = document.createElement("script");
    //     scriptOne.setAttribute("src", "https://polyfill.io/v3/polyfill.min.js?features=Promise%2CPromise.prototype.finally%2CTextDecoder%2CTextEncoder%2CObject.entries");
    //     scriptOne.setAttribute("id", "scrpitTransmitOne");
    //     document.head.appendChild(scriptOne);

    //     let scriptTwo = document.createElement("script");
    //     scriptTwo.setAttribute("src", "https://signin.bindid-sandbox.io/bindid-sdk/transmit-bind-id-sdk.js");
    //     scriptTwo.setAttribute("id", "scrpitTransmitTwo");
    //     scriptTwo.defer = true
    //     document.head.appendChild(scriptTwo);
    // },
    // unmounted() {
    //     let scriptOne = document.getElementById("scrpitTransmitOne")
    //     document.head.removeChild(scriptOne);

    //     let scriptTwo = document.getElementById("scrpitTransmitTwo")
    //     document.head.removeChild(scriptTwo);

    //     let metaOne = document.getElementById("metaTransmitOne")
    //     document.head.removeChild(metaOne);

    //     let metaTwo = document.getElementById("metaTransmitTwo")
    //     document.head.removeChild(metaTwo);
    // },
    methods: {
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0d4680;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #0d4680;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.xm-bind-id-button {
  border: none;
  background: none;
  color: aliceblue;
  
}

</style>

