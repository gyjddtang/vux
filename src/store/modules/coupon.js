/**
 * Created by MiliGao on 2017/11/22.
 */

import { checkQualify, couponReceive, couponQuery } from '../../api/coupon'

let coupon = {
  namespaced: true,
  state: {
    active: {},
    couponList: []
  },
  mutations: {
    SAVE (state, payload) {
      for (let key in payload) {
        state[key] = payload[key]
      }
    }
  },
  actions: {
    checkQualify ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        checkQualify(payload)
          .then(res => {
            let { activityName, description, valid, message } = res.body
            commit('SAVE', {
              active: { activityName, description }
            })
            resolve({ valid, message })
          })
      })
    },

    couponReceive ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        couponReceive(payload)
          .then(res => {
            resolve(res)
          })
      })
    },

    couponQuery ({ commit }, payload) {
      couponQuery(payload)
        .then(res => {
          console.log(res)
          commit('SAVE', {
            couponList: res.tickets
          })
        })
    }
  }
}

export default coupon
