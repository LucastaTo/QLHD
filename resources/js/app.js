require('./bootstrap');

import BootstrapVue3 from 'bootstrap-vue-3'
import { createApp } from 'vue'
import HelloWorld from './components/Welcome'
import PDFfile from './components/pdfFile'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

const app = createApp({})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

library.add(faUserSecret)
app.component('hello-world', HelloWorld)
app.component('pdf-file', PDFfile)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(BootstrapVue3)
app.mount('#app')