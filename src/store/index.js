import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    minus(state) {
      state.count--
    }
  },
  actions: {
  },
  modules: {
  }
})
