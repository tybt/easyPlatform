import React, { PureComponent } from 'react'
import {router,Redirect} from 'umi';
import {connect} from 'dva'

@connect(({userModel})=>{userModel})
export default class Indexs extends PureComponent {
  componentDidMount(){
    console.log(this.props)
    // if(!this.props.userModel.userData.token){
    //   router.push('login')
    // }
  }
  render() {
    console.log(this.props,'this.props')
    return (
      <Redirect to="/movies" />
    )
  }
}

