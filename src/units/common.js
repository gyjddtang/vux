/**
 * Created by Mili on 2017/11/7.
 */

import md5 from 'md5'

// import
function _import (file) {
  return () => import('@/views/' + file)   // 路由懒加载
}

// 路由时间key
function setRouterKey () {
  return new Date().getTime().toString(36)
}

// md5Sign
function md5Sign (obj) {
  let note = ''   // 随机字符串
  for (let i = 0; i < 8; i++) {
    let n = Math.floor(Math.random() * 36).toString(36)
    n = Math.round(Math.random()) ? n.toLocaleUpperCase() : n
    note += n
  }
  let timestamp = new Date().getTime()   // 时间戳
  let body = ''   // body数据
  if (obj) {
    for (let key in obj) {
      body += obj[key]
    }
  }
  let sign = md5('gznb.member' + note + timestamp + body + 'gznb@com')   // 参数签名
  return obj ? { note, timestamp, body: obj, sign } : { note, timestamp, sign }
}

export { _import, setRouterKey, md5Sign }
