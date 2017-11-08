import Vue from 'vue'
import Router from 'vue-router'
import { _import } from '../units/common'

Vue.use(Router)

export const constantRouter = [
  {
    path: '/',
    name: 'Hello',
    component: _import('Hello')
  }, {
    path: '/coupon',
    name: 'Coupon',
    component: _import('Coupon')
  }
]

export default new Router({
  routes: constantRouter
})
