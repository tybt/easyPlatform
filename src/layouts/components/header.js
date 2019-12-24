import React, { PureComponent, Fragment } from 'react'
import { Button,Icon,Popover} from 'antd';
import { connect } from 'dva'
import styles from './header.less'
import img from '../../assets/logo.jpg'
 
@connect(({ loading }) => ({ loading }))
export default class example extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
    

    };
  }
  render(){
    const content=(
      <a>退出登录</a>
    )
    return(
      <Fragment>
        <div className={styles.header}>
          <div className={styles.leftBox}>
            <div className={styles.flexAlign}>
              <img className={styles.logo} src={img}></img>
              <span className={styles.word}>豆瓣</span>
            </div>
            <Icon className={styles.cloopaseIcon} onClick={()=>this.toggleCollapsed()} type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
            <div className={styles.infoBox}>
              <Icon className={styles.icon} type='bell'></Icon>
              <span className={styles.count}>12</span>
            </div>
            <div className={styles.user}>
              <Popover overlayStyle={{'zIndex':99999}} content={content}>
                <a style={{color:'#333'}}>你好！伍祥清</a>
              </Popover>
              
              <img className={styles.userImg} src={img} />
            </div>
          </div>
        </div>
        
      </Fragment>
    )
  }
  toggleCollapsed(){
    this.props.collapsed()
    
  }

}
