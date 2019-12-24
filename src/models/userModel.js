import router from 'umi/router';

export default {

  namespace: 'userModel',

  state: {
    userData:{
    }
  },

  subscriptions: {
  },

  effects: {
    
  },

  reducers: {
    changeRouerName(state, {payload}) {
      return { ...state, routerName};
    },
    saveUser(state,{payload}){

      //router.push("/movie")
      state.userData={...payload.data}
      return{
        ...state
      }
    }
  },

};