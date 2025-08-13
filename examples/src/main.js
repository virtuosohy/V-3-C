import { createApp } from 'vue'

import App from './App.vue'

//全局注册
import AA from "../../packages/index"

const app= createApp(App)
app.use(AA)
app.mount('#app')
