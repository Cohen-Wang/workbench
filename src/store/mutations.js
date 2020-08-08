const mutations = {
  // 全局路由配置
  SET_ROUTES: (state, payload) => {
    state.routes = payload
  },
  // 当前导航
  SET_CURRENT_NAV: (state, payload) => {
    state.currentNav = payload
  },
  // 设置主题
  SET_CURRENT_THEME: (state, payload) => {
    state.theme = payload
    window.localStorage.setItem('theme', payload)
  },
  // 设置导航菜单宽度
  SET_CURRENT_COLLAPSED: (state, payload) => {
    state.collapsed = payload
    window.localStorage.setItem('collapsed', payload)
  }
}

export default mutations
