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
    localStorage.setItem('theme', payload)
  },
  // 设置导航菜单宽度
  SET_CURRENT_COLLAPSED: (state, payload) => {
    state.collapsed = payload
    localStorage.setItem('collapsed', payload)
  },
  // +------------------------------------------------------------------------------------------------------------------
  // | 用户信息
  // +------------------------------------------------------------------------------------------------------------------
  // 设置用户信息
  SET_USER_INFO: (state, payload) => {
    state.userInfo = payload
    localStorage.setItem('userInfo', JSON.stringify(payload))
  },
  // 清空用户信息
  REMOVE_USER_INFO: state => {
    state.userInfo = {}
    localStorage.removeItem('userInfo')
  },
  // +------------------------------------------------------------------------------------------------------------------
  // | token
  // +------------------------------------------------------------------------------------------------------------------
  // 设置token
  SET_TOKEN: (state, payload) => {
    state.token = payload
    localStorage.setItem('token', payload)
  },
  // 清空token
  REMOVE_TOKEN: state => {
    state.token = ''
    localStorage.removeItem('token')
  }
}

export default mutations
