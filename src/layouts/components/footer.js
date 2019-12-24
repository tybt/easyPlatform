import React, { PureComponent, Fragment } from 'react'
import { } from 'antd';
import { connect } from 'dva'
import styles from './footer.less'



@connect(({ loading }) => ({ loading }))
export default class Footer extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      

    };
  }
  render(){
    return(
      <Fragment>
        <div style={{color:'#888',textAlign:'center',width:'100%',lineHeight:'70px'}}>
          <span className={styles.word}>一个豆瓣的后台管理系统@2019 Design By wuxiangqing</span>
        </div>
      </Fragment>
    )
  }
}
