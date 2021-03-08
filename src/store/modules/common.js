// asideBar 导航处需要的router数据
import { routes } from '@/router'
// 配置常量
import { DEFAULT_THEME, DEFAULT_COLLAPSED } from '@/const'

const common = {
  namespaced: true,
  state: {
    // 全局路由配置
    routes: routes || [],
    // 当前一级导航
    currentNav: 'study',
    // 主题
    theme: localStorage.getItem('theme') || DEFAULT_THEME,
    // 导航菜单宽度
    collapsed: JSON.parse(localStorage.getItem('collapsed')) || DEFAULT_COLLAPSED
  },
  getters: {
  },
  mutations: {
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
    }
  },
  actions: {
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
    }
  }
}

export default common
