import './style/global.less'
import 'animate.css'
import Vue from 'vue'

// 调用 ant-design框架
import Antd from 'ant-design-vue'
Vue.use(Antd)
// ...
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import store from './store'
import axios from 'axios'

// 调用Vue-Worker
import VueWorker from 'vue-worker'
Vue.use(VueWorker)

import './mock/index'
// vue 播放器
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
// 打印机 打印插件
import Print from 'vue-print-nb-jeecg'
Vue.use(Print)

Vue.config.productionTip = false

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
