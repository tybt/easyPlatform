import React from 'react'
import {Menu,Icon,Button } from 'antd';
import { connect } from 'dva'
import Header from './components/header'
import Footer from './components/footer'
import styles from './index.less'
import {router,Link} from 'umi'
const { SubMenu } = Menu;

@connect(({ layoutModel,userModel}) => ({ layoutModel,userModel }))
export default class layouts extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      drawerVisible:true,
      collapsed:false,
      theme:true
    };
  }
  render(){
    let collapsedStyle={
      flex:this.state.collapsed==false?'0 0 256px':'0 0 30px',
      color:'#8888'
    }
    const {menuData,keyName}=this.props.layoutModel
    let temp=menuData.map((elem,index)=>{
      if(elem.second){
        return(
          <SubMenu
          key={elem.key}
          title={
            <span>
              <Icon type="appstore" />
              <span>{elem.name}</span>
            </span>
          }>
            {elem.second.map((elem_2,index_2)=>{
              return(
              <Menu.Item key={elem_2.key}>
                <Link to={elem_2.router} style={{textIndent:'32px'}}>{elem_2.name}</Link>
              </Menu.Item>
                )
            })}
  
          </SubMenu> 
          )
      }
      else{
        return(
          <Menu.Item key={elem.key}>
            
            <Link to={elem.router} >
              <Icon type="mail" />
              <span>{elem.name}</span>
            </Link>
          </Menu.Item>
        )
      }
    })
    const keyNameDom=keyName.map((elem,index)=>{
      if(index==0){
        return(
          <span >{elem.name} / </span>
          )
      }
      else{
        return(
          <span >{elem.name}</span>
        )
      }
      
    })
    return(

      <div className={styles.main}>
        {this.props.layoutModel.isLogin==true?(<div>{this.props.children}</div>):(
        <div className={styles.main}>
          <Header collapsed={()=>this.setCollapsed()}></Header>
          <div className={styles.left} style={collapsedStyle}>
            <Menu
            defaultOpenKeys={['1']}	//初始展开的 SubMenu 菜单项 key 数组
            defaultSelectedKeys={['sub1']}	//初始选中的菜单项 key 数组
            inlineCollapsed={this.state.collapsed}	//inline 时菜单是否收起状态
            inlineIndent={'10px'}	//inline 模式的菜单缩进宽度
            mode={'inline'}	//菜单类型，现在支持垂直、水平、和内嵌模式三种
            style={{ width:'100%',marginTop:'70px',boxShadow:'4px 4px 40px 0 rgba(0, 0, 0, 0.05)' }}	//根节点样式
            theme={this.state.theme?'light':'dark'}	//主题颜色
            onClick={({ item, key, keyPath, domEvent })=>this.select({ item, key, keyPath, domEvent })}	//点击 MenuItem 调用此函数
            >
              {temp}
            </Menu>
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <div style={{margin:'20px',color:'#666'}}>{keyNameDom}</div>
              <div className={styles.body}>
                {this.props.children}
              </div>

              
            </div>
            <Footer></Footer>
          </div>
        </div>)}
        


      </div>
    )
  }  
  setCollapsed(){
    if(this.state.collapsed==true){
      this.setState({collapsed:false})
    }
    else{
      this.setState({collapsed:true})
    }
  }
  closeDrawer(){
    this.setState({drawerVisible:false})
  }
  select({ item, key, keyPath, domEvent }){
    this.props.dispatch({
      type:"layoutModel/changeHeader",
      payload: {
        keyPath
      }
    })
  }
}
