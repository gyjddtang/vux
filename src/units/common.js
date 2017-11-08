/**
 * Created by Mili on 2017/11/7.
 */

// import
function _import (file) {
  return () => import('@/views/' + file)   // 路由懒加载
}

// 路由时间key
function setRouterKey () {
  return new Date().getTime().toString(36)
}

setRouterKey()

export { _import, setRouterKey }
