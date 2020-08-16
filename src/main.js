import './style/global.less'
import 'animate.css'
import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import store from './store'
import axios from 'axios'
import VueWorker from 'vue-worker'
import './mock/index'

Vue.config.productionTip = false

// 调用 ant-design框架
Vue.use(Antd)

// 调用Vue-Worker
Vue.use(VueWorker)

/**
 * axios并没有install 方法，所以是不能使用vue.use()方法的。
 * 引入axios，并加到原型链中
 */
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
