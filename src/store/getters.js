const getters = {
  // 全局路由配置
  routes: state => state.routes,
  // 当前导航
  currentNav: state => state.currentNav,
  // 主题
  theme: state => state.theme,
  // 导航菜单宽度
  collapsed: state => state.collapsed,
  // 登录用户信息
  userInfo: state => state.userInfo,
  // token
  token: state => state.token
}

export default getters
