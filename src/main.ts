import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'virtual:windi.css'
import './style.css'
import '@icon-park/vue-next/styles/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
