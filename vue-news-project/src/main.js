import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import store from './store/'
import axios from 'axios'
import Loading from './components/loading/'


Vue.use(VueRouter);
Vue.use(Loading);


//关于axios的配置
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading')  //拦截器，在发送前在store对象发送showLoading的action
  return config;
}, function (error) {
  return Promise.reject(error);
});


axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading') //拦截器，在发送后在store对象发送hideLoading的action
  return response;
}, function (error) {

  return Promise.reject(error);
});


//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';  //设置post头部信息
//axios.defaults.baseURL='http://localhost:8082/';   //配置请求的根路径

Vue.prototype.$http = axios; //把axios对象挂到Vue原型上





const router = new VueRouter({
	mode: 'history', //切换路径模式，变成history模式
  	scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes:routerConfig
})

require('./assets/css/base.css'); //全局引入

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
