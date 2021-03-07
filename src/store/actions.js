const actions = {
  // 全局路由配置
  SET_ROUTES: (context, payload) => {
    context.commit('SET_ROUTES', payload)
  },
  // 当前导航
  SET_CURRENT_NAV: (context, payload) => {
    context.commit('SET_CURRENT_NAV', payload)
  },
  // 设置主题
  SET_CURRENT_THEME: (context, payload) => {
    context.commit('SET_CURRENT_THEME', payload)
  },
  // 设置导航菜单宽度
  SET_CURRENT_COLLAPSED: (context, payload) => {
    context.commit('SET_CURRENT_COLLAPSED', payload)
  },
  // +------------------------------------------------------------------------------------------------------------------
  // | 用户信息
  // +------------------------------------------------------------------------------------------------------------------
  // 设置用户信息
  SET_USER_INFO: (context, payload) => {
    context.commit('SET_USER_INFO', payload)
  },
  // 清空用户信息
  REMOVE_USER_INFO: context => {
    context.commit('REMOVE_USER_INFO')
  },
  // +------------------------------------------------------------------------------------------------------------------
  // | token
  // +------------------------------------------------------------------------------------------------------------------
  // 设置token
  SET_TOKEN: (context, payload) => {
    context.commit('SET_TOKEN', payload)
  },
  // 清空token
  REMOVE_TOKEN: context => {
    context.commit('REMOVE_TOKEN')
  }
}

export default actions
