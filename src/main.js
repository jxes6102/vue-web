import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import 'normalize.css/normalize.css'
import './tailwind/index.css'
import router from './router'
import store from './store'
import i18n from './lang/plugins/i18n'

createApp(App).use(store).use(router).use(i18n).mount('#app')
