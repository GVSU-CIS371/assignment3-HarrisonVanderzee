import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/mug.scss'
import App from './App.vue'

createApp(App)
    .use(createPinia())
    .mount('#app')