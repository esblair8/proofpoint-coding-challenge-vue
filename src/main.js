/**
 * Main javascript file that creates a Vue instance with:
 * Vuex - synchronous state management (store)
 * Vue Router - a client side jaavascript router, built for Vuejs
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import router from './router'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false

// create vue instance and mount it to the div in index.html with id of "app"
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')