import { local } from '@/utils'

const user = {
  namespaced: true,
  state: {
    userInfo: local.get({ name: 'userInfo' }) || {}
  },
  getters: {
  },
  mutations: {
    // 设置用户信息
    SET_USER_INFO: (state, payload) => {
      state.userInfo = payload
      local.set({
        name: 'userInfo',
        content: payload
      })
    },
    // 清空用户信息
    REMOVE_USER_INFO: state => {
      state.userInfo = {}
      local.remove('userInfo')
    }
  },
  actions: {
    // 设置用户信息
    SET_USER_INFO: (context, payload) => {
      context.commit('SET_USER_INFO', payload)
    },
    // 清空用户信息
    REMOVE_USER_INFO: context => {
      context.commit('REMOVE_USER_INFO')
    }
  }
}

export default user
