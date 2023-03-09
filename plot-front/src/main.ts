import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueMapboxTs from "vue-mapbox-ts";
import App from './App.vue'

const app = createApp(App)
app.use(VueMapboxTs)
app.use(createPinia())



app.mount('#app')
