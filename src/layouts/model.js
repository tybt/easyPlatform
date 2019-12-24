
import api from '../services/index'

const { menuList }=api

export default {

  namespace: 'layoutModel',

  state: {
    menuData:[],
    keyName:[],
    isLogin:false
  },

  subscriptions: {
    setup({dispatch,history}){
      history.listen((location) => {
        if (location.pathname=='/login') {
          dispatch({
            type:'login'
          })
        }
        else{
          dispatch({
            type:'queryMenuList',
            payload:{}  
          })
        }
      })
      
    }
  },

  effects: {
    *queryMenuList({payload},{call,put}){
      const data=yield call(menuList,payload);
      const {menuData}=data;
      yield put({
        type:'querySucess',
        payload:{
          menuData
        }
      })
    }
  },

  reducers: {
    login(state){
      state.isLogin=true;
      return {...state}
    },
    querySucess(state, {payload}) {
      const {menuData}=payload
      return { ...state, menuData};
    },
    changeHeader(state,{payload}){
      const{keyPath} =payload;
      const {menuData}=state;
      state.keyName.length=0;
      if(keyPath.length==1){
        menuData.map(elem=>{
          if(elem.key==keyPath[0]){
            let param={
              name:elem.name,
              router:elem.router
            }
            state.keyName.push(param)
          }
        })
      }
      else if(keyPath.length==2){
        
        menuData.map(elem=>{
          if(elem.key==keyPath[1]){
            state.keyName.push(
              {
                name:elem.name,
            }
            )
            elem.second.map(item=>{
              if(item.key==keyPath[0]){
                let param={
                  name:item.name,
                  router:item.router
                }
                state.keyName.push(param)
              }
            })
          }
        })
        
      }
      return{
        ...state
      }
    }
  },

};
