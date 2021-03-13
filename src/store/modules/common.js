import { DEFAULT_THEME, DEFAULT_COLLAPSED } from '@/const' // 配置常量
import { local } from '@/utils'

const common = {
  namespaced: true,
  state: {
    // 当前一级导航
    currentNav: local.get({ name: 'currentNav' }) || 'study',
    // 主题
    theme: local.get({ name: 'theme' }) || DEFAULT_THEME,
    // 导航菜单宽度
    collapsed: local.get({ name: 'collapsed' }) || DEFAULT_COLLAPSED
  },
  getters: {
  },
  mutations: {
    // 当前导航
    SET_CURRENT_NAV: (state, payload) => {
      state.currentNav = payload
      local.set({
        name: 'currentNav',
        content: payload
      })
    },
    // 设置主题
    SET_CURRENT_THEME: (state, payload) => {
      state.theme = payload
      local.set({
        name: 'theme',
        content: payload
      })
    },
    // 设置导航菜单宽度
    SET_CURRENT_COLLAPSED: (state, payload) => {
      state.collapsed = payload
      local.set({
        name: 'collapsed',
        content: payload
      })
    }
  },
  actions: {
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
