export default{

  ['/api/menuList'](req,res){
    res.json({
      msg:"操作成功",
      code:200,
      data:{
        menuData:[
          {
            name:'数据分析',
            key:1,
            router:'/chart'
          },
          {
            name:'影视管理',
            key:2,
            second:[
              {
                name:'电影管理',
                key:3,
                router:'/movies'
              },
              {
                name:'电视剧',
                key:4,
                router:'/tv'
              },
              {
                name:'书籍',
                key:5,
                router:'/books'
              },
              {
                name:'音乐',
                key:6,
                router:'/music'
              },
            ]
          }
        ] 
      }
    })
  },


  
}