import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/styles.scss'
import "bootstrap/dist/css/bootstrap.css";

import headerComponents from './components/Header/header'
import footerComponents from './components/Footer/footer'
import globalComponents from './components/Global/global'

const app = createApp(App)

app.use(headerComponents)
app.use(footerComponents)
app.use(globalComponents)

app.mount('#app')


