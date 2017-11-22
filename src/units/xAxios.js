/**
 * Created by MiliGao on 2017/11/22.
 */

import axios from 'axios'
import { remoteURL } from './remote'

// 创建实例的时候配置默认配置
let xAxios = axios.create({
  timeout: 20000,
  baseURL: remoteURL
})

// request请求拦截器
xAxios.interceptors.request.use(config => {
  return config
}, error => {
  // 一些错误是在设置请求的时候触发
  console.log(error) // for debug
  return Promise.reject(error)
})

// response响应拦截器
xAxios.interceptors.response.use(response => {
  let { data } = response
  return data
}, error => {
  console.log('requestErr' + error)   // for debug
  return Promise.reject(error)
})

export default xAxios
