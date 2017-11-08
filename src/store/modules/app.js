/**
 * Created by Mili on 2017/11/7.
 */

let app = {
  namespaced: true,
  state: {
    viewDirection: 'refresh'   // forward: right-in, back: left-in, refresh: fade-in
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
    }
  }
}

export default app
