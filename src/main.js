import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).use(store).use(router).use(AOS.init({once:true})).mount('#app')

import "bootstrap/dist/js/bootstrap.js"

