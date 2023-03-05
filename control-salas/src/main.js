import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '/node_modules/primeflex/primeflex.min.css'

createApp(App).use(store).mount('#app')
