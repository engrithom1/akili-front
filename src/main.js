import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store/index'
window.$ = window.jQuery = require('jquery');



//import Auth from './packages/Auth.js'

/*slint-disable no-new*/

createApp(App).use(router).use(store).mount('#app')
