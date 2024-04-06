import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { common_axios } from 'common'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
