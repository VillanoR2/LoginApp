import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Vuelidate from 'vuelidate'

let app = createApp(App)
app.config.productionTip = false

app.config.globalProperties.$userData = {
    "apellido": "",
    "bindAlias": "",
    "departamento": "",
    "email": "",
    "id": 0,
    "nombre": "",
    "nombre_Usuario": "",
    "rol": "",
    "telefono": ""
}
app.config.globalProperties.$requireRegister = false
app.config.globalProperties.$authCode = ""

app.use(Vuelidate)

app.use(router).mount('#app')




