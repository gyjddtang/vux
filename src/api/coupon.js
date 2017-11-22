/**
 * Created by MiliGao on 2017/11/22.
 */

import xAxios from '../units/xAxios'

function queryUser (data) {
  return xAxios({
    url: `/userSign?openid=${data}`,
    method: 'GET'
  })
}

export { queryUser }
