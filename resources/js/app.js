require('./bootstrap');

import BootstrapVue3 from 'bootstrap-vue-3'
import { createApp } from 'vue'
import HelloWorld from './components/Welcome'

const app = createApp({})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

app.component('hello-world', HelloWorld)
app.use(BootstrapVue3)
app.mount('#app')