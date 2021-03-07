const actions = {
  // 全局路由配置
  SET_ROUTES: (state, payload) => {
    state.routes = payload
  },
  // 当前导航
  SET_CURRENT_NAV: (state, payload) => {
    state.currentNav = payload
  },
  // 设置主题
  SET_CURRENT_THEME: (context, payload) => {
    console.log('actions')
    context.commit('SET_CURRENT_THEME', payload)
  },
  // 设置导航菜单宽度
  SET_CURRENT_COLLAPSED: (context, payload) => {
    context.commit('SET_CURRENT_COLLAPSED', payload)
  }
}

export default actions
