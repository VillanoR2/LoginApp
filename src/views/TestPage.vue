<template>
    <div>
        <button class='xm-bind-id-button'>Biometric Login</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nombre: ""
        }
    },
    mounted() {
        let metaOne = document.createElement("meta");
        metaOne.setAttribute("name", "xm-bind-id-client_id");
        metaOne.setAttribute("content", "fb355573.417b53dd.tid_414530e0.bindid.io");
        metaOne.setAttribute("id", "metaTransmitOne");
        document.head.appendChild(metaOne);

        let metaTwo = document.createElement("meta");
        metaTwo.setAttribute("name", "xm-bind-id-redirect_uri");
        metaTwo.setAttribute("content", "[REDIRECT_URI]");
        metaTwo.setAttribute("id", "metaTransmitTwo");
        document.head.appendChild(metaTwo);

        let scriptOne = document.createElement("script");
        scriptOne.setAttribute("src", "https://polyfill.io/v3/polyfill.min.js?features=Promise%2CPromise.prototype.finally%2CTextDecoder%2CTextEncoder%2CObject.entries");
        scriptOne.setAttribute("id", "scrpitTransmitOne");
        document.head.appendChild(scriptOne);

        let scriptTwo = document.createElement("script");
        scriptTwo.setAttribute("src", "https://signin.bindid-sandbox.io/bindid-sdk/transmit-bind-id-sdk.js");
        scriptTwo.setAttribute("id", "scrpitTransmitTwo");
        scriptTwo.defer = true
        document.head.appendChild(scriptTwo);
    },
    unmounted() {
        let scriptOne = document.getElementById("scrpitTransmitOne")
        document.head.removeChild(scriptOne);

        let scriptTwo = document.getElementById("scrpitTransmitTwo")
        document.head.removeChild(scriptTwo);

        let metaOne = document.getElementById("metaTransmitOne")
        document.head.removeChild(metaOne);

        let metaTwo = document.getElementById("metaTransmitTwo")
        document.head.removeChild(metaTwo);
    },
    methods: {
        functionOne() {

        },
        funcionTwo() {

        }
    }
}

</script>