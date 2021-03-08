// 注册
import Vue from 'vue'
import Vuex from 'vuex'
// 模块
import common from './modules/common'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    common,
    user
  }
})
