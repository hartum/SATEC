import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'
import VueAxios from 'vue-axios'
import '/node_modules/primeflex/primeflex.min.css'

createApp(App).use(VueAxios, axios).use(store).mount('#app')
