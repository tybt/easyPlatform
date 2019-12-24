import axios from 'axios';

import { message  } from "antd";
const headers={
  
}
export function request(option){
  console.log(option,'axios上传的参数')
  return new Promise((resolve,reject)=>{
    axios(option).then((response)=>{
      
      const {data,code,msg}=response.data
      if(code!=200){
        console.log(response,'response')
        message.warn(msg);
        reject()
      }
      else{
        console.log(data,'返回的数据')
        return resolve(data)
      }
      
      
    }).catch((err)=>{
      reject({
        success: false,
        statusCode:500,
        message: '网络错误',
      })
      
    })
  })
}