// asideBar 导航处需要的router数据
import { routes } from '../router'

const state = {
  // 全局路由配置
  routes: routes,
  // 当前一级导航
  currentNav: 'study',
  // 主题
  theme: 'light',
  // 导航菜单宽度
  collapsed: true
}

export default state
