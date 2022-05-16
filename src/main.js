import { createApp } from 'vue'
import App from './App.vue'
import Toaster from "@meforma/vue-toaster";

import router from './router'
import store from './store/index'
window.$ = window.jQuery = require('jquery');



//import Auth from './packages/Auth.js'

/*slint-disable no-new*/

createApp(App)
.use(router)
.use(Toaster,{position: "top-right"})
.use(store)
.mount('#app')
