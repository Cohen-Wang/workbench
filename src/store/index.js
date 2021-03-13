// 注册
import Vue from 'vue'
import Vuex from 'vuex'
// 模块
import token from './modules/token'
import user from './modules/user'
import router from './modules/router'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    token,
    user,
    router,
    common
  }
})
