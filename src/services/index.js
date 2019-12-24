import {request} from '../utils/request';
import api from './api'



const gen = params => {
  let url = params
  let method = 'GET'
 
  const paramsArray = params.split(' ')
  if (paramsArray.length === 2) {
    method = paramsArray[0]
    url =paramsArray[1]
  }
  return function(data) {
    return request({
      url,
      data,
      method,
    })
  }
}

let apiData={}
for (const key in api) {
  apiData[key] = gen(api[key])
}


export default apiData


