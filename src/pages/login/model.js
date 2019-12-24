
import api from '../../services/index'

import router from 'umi/router';
const { loginByAccount } = api

export default {
  namespace:'login',

  state: {
    isLogin:false,
    user:{}
  },

  subscriptions: {
    setup({ dispatch, history }) {
     
    },
  },

  effects:{
    *toLogin({payload},{call,put}){
      const data=yield call(loginByAccount,payload);
      yield put({
        type:'userModel/saveUser',
        payload:{
          data
        }
      })

    }
  },
  reducers:{
    
  }

}