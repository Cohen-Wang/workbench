const mutations = {
  // 全局路由配置
  SET_ROUTES: (state, payload) => {
    state.routes = payload
  },
  // 当前导航
  SET_CURRENT_NAV: (state, payload) => {
    state.currentNav = payload
  }
}

export default mutations
