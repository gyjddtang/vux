/**
 * Created by Mili on 2017/11/7.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app
  }
})

export default store

