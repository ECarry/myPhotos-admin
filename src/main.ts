import { createApp } from 'vue'
import { stores } from './stores'
import router from './router'
import App from './App.vue'

import 'remixicon/fonts/remixicon.css'
import '~/styles/index.scss'

const app = createApp(App)

app.use(stores)
app.use(router)
app.mount('#app')
