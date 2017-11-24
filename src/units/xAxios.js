/**
 * Created by MiliGao on 2017/11/22.
 */

import axios from 'axios'
import { remoteURL } from './remote'
import { AlertModule } from 'vux'
import store from '../store'

let xAxios = axios.create({
  timeout: 20000,
  baseURL: remoteURL
})

// request请求拦截器
xAxios.interceptors.request.use(config => {
  store.dispatch('app/setLoading', true)
  return config
}, error => {
  store.dispatch('app/setLoading', false)
  console.log(error) // for debug
  return Promise.reject(error)
})

// response响应拦截器
xAxios.interceptors.response.use(response => {
  store.dispatch('app/setLoading', false)
  let { code, msg } = response.data
  if (code !== '1000') {
    AlertModule.show({
      title: '提示',
      content: msg
    })
    return Promise.reject(msg)
  } else {
    return response.data
  }
}, error => {
  store.dispatch('app/setLoading', false)
  console.log('requestErr' + error)   // for debug
  return Promise.reject(error)
})

export default xAxios
