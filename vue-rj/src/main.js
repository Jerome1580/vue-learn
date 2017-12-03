// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import Axios from 'axios'

Vue.config.productionTip = false

import Loading from './components/Loading/'
Vue.use(Loading)

//  发生请求
Axios.interceptors.request.use(function(config){
    store.dispatch('showLoading');
    return config
},function(err){
    return Promise.reject(err)
})


Axios.interceptors.response.use(function(response){
    store.dispatch('hideLoading');
    return response
},function(err){
    return Promise.reject(err)
})

Vue.prototype.$http = Axios ;


require('./assets/css/base.css');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
