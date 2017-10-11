import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import store from './store/'


Vue.use(VueRouter);

const router = new VueRouter({
	mode:'history',
	routes:routerConfig
})

require('./assets/css/base.css'); //全局引入

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
