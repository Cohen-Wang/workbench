import { session } from '@/utils'

const token = {
  namespaced: true,
  state: {
    token: session.get('access_token') || ''
  },
  getters: {
  },
  mutations: {
    // 设置token
    SET_TOKEN: (state, payload) => {
      state.token = payload
      session.set({
        name: 'access_token',
        content: payload
      })
    },
    // 清空token
    REMOVE_TOKEN: state => {
      state.token = ''
      session.remove('access_token')
    }
  },
  actions: {
    // 设置token
    SET_TOKEN: (context, payload) => {
      context.commit('SET_TOKEN', payload)
    },
    // 清空token
    REMOVE_TOKEN: context => {
      context.commit('REMOVE_TOKEN')
    }
  }
}

export default token
