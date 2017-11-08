/**
 * Created by Mili on 2017/11/8.
 */

import router from './index'
import store from '../store'
import { setRouterKey } from '../units/common'

function setViewDirection (type) {
  return new Promise((resolve, reject) => {
    store.dispatch('app/setViewDirection', type)
      .then(() => {
        resolve()
      })
  })
}

router.beforeEach((to, from, next) => {
  let toK = to.query._k
  let fromK = from.query._k
  if (toK) {
    if (toK < fromK) {
      setViewDirection('back')
        .then(res => {
          next()
        })
    } else if (toK > fromK) {
      setViewDirection('forward')
        .then(res => {
          next()
        })
    } else {
      setViewDirection('refresh')
        .then(res => {
          next()
        })
    }
  } else {
    to.query._k = setRouterKey()   // 路由插入key值
    next({ ...to })
  }
})

router.afterEach((to, from) => {
})
