import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Vuelidate from 'vuelidate'

let app = createApp(App)
app.config.productionTip = false

let myGlobalVariable = {
    data(){
        return {
            userData: {},
            requireRegister : false,
            authCode : ""
        }
    }
}

app.use(Vuelidate)
app.mixin(myGlobalVariable)
app.use(router).mount('#app')




