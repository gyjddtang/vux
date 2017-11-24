/**
 * Created by MiliGao on 2017/11/22.
 */

import xAxios from '../units/xAxios'

function checkQualify (data) {
  return xAxios({
    url: `/gznbmember/api/checkQualify`,
    method: 'POST',
    data
  })
}

function couponReceive (data) {
  return xAxios({
    url: '/gznbmember/api/couponReceive',
    method: 'POST',
    data
  })
}

function couponQuery (data) {
  return xAxios({
    url: '/gznbmember/api/cardCouponQuery',
    method: 'POST',
    data
  })
}

export { checkQualify, couponReceive, couponQuery }
