
const user = {
  namespaced: true,
  state: {
    // 登录用户信息
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    // token
    token: localStorage.getItem('token') || ''
  },
  getters: {
  },
  mutations: {
    // +----------------------------------------------------------------------------------------------------------------
    // | 用户
    // +----------------------------------------------------------------------------------------------------------------
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
    // +----------------------------------------------------------------------------------------------------------------
    // | token
    // +----------------------------------------------------------------------------------------------------------------
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
  },
  actions: {
    // +----------------------------------------------------------------------------------------------------------------
    // | 用户
    // +----------------------------------------------------------------------------------------------------------------
    // 设置用户信息
    SET_USER_INFO: (context, payload) => {
      context.commit('SET_USER_INFO', payload)
    },
    // 清空用户信息
    REMOVE_USER_INFO: context => {
      context.commit('REMOVE_USER_INFO')
    },
    // +----------------------------------------------------------------------------------------------------------------
    // | token
    // +----------------------------------------------------------------------------------------------------------------
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

export default user
