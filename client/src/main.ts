import './assets/main.css'
import './shared/print.css'

import TOAST from "vue-toastification"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

// To create Pinia store; a global store to be shared throughout the application.
app.use(createPinia())

// To create Toast notifications for the application.
app.use(TOAST, {
    transition: "Vue-Toastification__fade",
    maxToasts: 3,
    newestOnTop: true
})

app.mount('#app')
