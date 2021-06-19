import { createApp } from 'vue'
import App from './App.vue'
import store from './stores'
import router from './router'
import 'virtual:windi.css'

createApp(App).use(router).use(store).mount('#app')
