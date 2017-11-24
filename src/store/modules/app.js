/**
 * Created by Mili on 2017/11/7.
 */

let app = {
  namespaced: true,
  state: {
    viewDirection: 'refresh',   // forward: right-in, back: left-in, refresh: fade-in
    loading: false
  },
  mutations: {
    SAVE (state, payload) {
      for (let key in payload) {
        state[key] = payload[key]
      }
    }
  },
  actions: {
    setViewDirection ({ commit }, payload) {
      commit('SAVE', {
        viewDirection: payload
      })
    },

    setLoading ({ commit }, payload) {
      commit('SAVE', {
        loading: payload
      })
    }
  }
}

export default app
