/**
 * Created by MiliGao on 2017/11/22.
 */

import { queryUser } from '../../api/coupon'

let coupon = {
  namespaced: true,
  state: {
    couponList: []
  },
  mutations: {
    save (state, payload) {
      for (let key in payload) {
        state[key] = payload[key]
      }
    }
  },
  actions: {
    receiveSign ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        queryUser(payload)
          .then(({ data, success }) => {
            if (success) resolve(data)
          })
      })
    }
  }
}

export default coupon
