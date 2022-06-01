import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Vuelidate from 'vuelidate'

let app = createApp(App)
app.config.productionTip = false

app.config.globalProperties.userData = {}
app.config.globalProperties.requireRegister = false
app.config.globalProperties.authCode = ""

app.use(Vuelidate)

app.use(router).mount('#app')




