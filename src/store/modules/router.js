// asideBar 导航处需要的router数据
import { routes } from '@/router'

const router = {
  namespaced: true,
  state: {
    // 全局路由配置
    routes: routes || []
  },
  getters: {
  },
  mutations: {
    // 全局路由配置
    SET_ROUTES: (state, payload) => {
      state.routes = payload
    }
  },
  actions: {
    // 全局路由配置
    SET_ROUTES: (context, payload) => {
      context.commit('SET_ROUTES', payload)
    }
  }
}

export default router
