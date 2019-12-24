
import api from '../../services/index'
import styles from "./movies.less";
const { queryMovies } = api

export default {
  namespace:'movies',

  state: {
    data:{},
    columns:[
      {
        title: '片名',
        dataIndex: 'name',
        key: 'name',
        className:styles.movieTab,
      },
      {
        title: '图片',
        dataIndex: 'images',
        key: 'images',
        width:100,
        textWrap: 'word-break',
        render:(res)=>{
          return(
            <img className={styles.movieImg} src={res}></img>
          )
        }
      },
      {
        title: '介绍',
        dataIndex: 'introduce',
        key: 'introduce',
        className:[],
        render:(data)=>{
          return <div title={data} className={styles.tabWidth_1}>{data}</div>
        }
      },
      {
        title: '导演',
        dataIndex: 'editor',
        key: 'editor',
        className:styles.movieTab
      },
      {
        title: '标签',
        dataIndex: 'label',
        key: 'label',
        className:[styles.movieTab,styles.tabWidth_1],
      },
      {
        title: '国家',
        dataIndex: 'country',
        key: 'country',
        className:[],
      },
      {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a title="nimabi">删除</a>,
      },
    ],
    dataSource :[
      {
        name: '哪吒',
        images:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3111553407,2134504319&fm=111&gp=0.jpg",
        introduce:"2019年上映的国产动画电影《哪吒之魔童降世》中的主角，阴差阳错来到世间惹尽麻烦的乱世“魔童”.他的成长十分坎坷，因为出生时灵珠被申公豹所偷，而成为魔丸转世，从小遭受陈塘关百姓的歧视、排斥、嘲笑和敌对。也因此，他性格孤僻、冷漠、叛逆、憋屈、玩世不恭，时不时就要跑出门大闹陈塘关百姓，让大家也不得安生。在玩世不恭的外表下，实际上重情重义，渴望亲情、友情，以及他人的认可。",
        editor:"木头",
        label:"国产动画"
      },
      {
        name: '三傻大闹宝莱坞',
        images:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3111553407,2134504319&fm=111&gp=0.jpg",
        introduce:"2019年上映的国产动画电影《哪吒之魔童降世》中的主角，阴差阳错来到世间惹尽麻烦的乱世“魔童”.他的成长十分坎坷，因为出生时灵珠被申公豹所偷，而成为魔丸转世，从小遭受陈塘关百姓的歧视、排斥、嘲笑和敌对。也因此，他性格孤僻、冷漠、叛逆、憋屈、玩世不恭，时不时就要跑出门大闹陈塘关百姓，让大家也不得安生。在玩世不恭的外表下，实际上重情重义，渴望亲情、友情，以及他人的认可。",
        editor:"拉库马·希拉尼",
        label:"国产动画"
      }

    ] 

  },

  subscriptions: {
     setup({ dispatch, history }) {
      history.listen(async (location) => {
        
        if (location.pathname=='/movies') {
          
          const payload ={a:1}
          // dispatch({
          //   type: 'query',
          //   payload:{a:1}
          // })
        }
      })
    },
  },

  effects:{
    *query({ payload}, { call, put }){
      const datas=yield call(queryMovies,payload);
      const {data}=datas
      yield put({
        type:'querySuccess',
        payload:{
          queryResult:data
        }
      })
    }
  },

  reducers:{
    querySuccess(state,{ payload }){
      const { queryResult } = payload
      return {
        ...state
      }
    }
  }

}