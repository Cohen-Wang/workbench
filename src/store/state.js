// asideBar 导航处需要的router数据
import { routes } from '@/router'
// 配置常量
import { DEFAULT_THEME, DEFAULT_COLLAPSED } from '@/const'

const state = {
  // 全局路由配置
  routes: routes,
  // 当前一级导航
  currentNav: 'study',
  // 主题
  theme: localStorage.getItem('theme') || DEFAULT_THEME,
  // 导航菜单宽度
  collapsed: JSON.parse(localStorage.getItem('collapsed')) || DEFAULT_COLLAPSED
}

export default state
