import React from "react";
import styles from "./login.less";
import { Input,Icon,Button,message  } from "antd";
import { connect } from "dva";


@connect(({ login }) => ({ login }))
export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account:'',
      password:''
    };
  }
  
  render() {
    return (
      <div className={styles.body}>
        <div className={styles.loginBox}>
          <div className={styles.title}>
            
            <span>豆瓣管理系统</span>
          </div>
          <div className={styles.inputBox}>
            <Input
            placeholder="请输入账号"
            prefix={<Icon type="user"  />}
            style={{width:'250px','marginTop':'20px'}}
            onChange={({target:{value}})=>this.setState({account:value})}
            />
            <Input.Password 
            placeholder="请输入密码"
            prefix={<Icon type="lock"></Icon>}
            style={{width:'250px','marginTop':'20px'}}
            onChange={({target:{value}})=>this.setState({password:value})}
            /> 
            <Button onClick={()=>this.toLogin()} style={{width:'250px','marginTop':'20px'}} type="primary">登录</Button>         
          </div>
          
        </div>
        
      </div>
    );
  }
  onChange = ({ target }) => {
    let {value}=target
    this.setState({ account:value});
  }
  toLogin(){
    if(this.state.account.trim()==""){
      message.warning("请输入账号")
    }
    else if(this.state.password.trim()==""){
      message.warning("请输入密码")
    }
    else{
      this.props.dispatch({
        type:'login/toLogin',
        payload:{
          account:this.state.account,
          password:this.state.password
        }
      })
    }
    
  }
}
