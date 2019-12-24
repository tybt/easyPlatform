
//const host='http://localhost:8500'
const host=''
const baesHost='http://172.20.10.3:8000'


export default {
  menuList:`GET /api/menuList`,
  loginByAccount:`POST ${host}/proxys/api/public/loginByAccount`,
}