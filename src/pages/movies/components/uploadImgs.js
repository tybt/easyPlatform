import React, { PureComponent, Fragment } from 'react'
import {Upload, Icon, message } from 'antd';
import { connect } from 'dva'
import styles from './uploadImgs.less'




@connect(({ loading }) => ({ loading }))
export default class example extends PureComponent{
   constructor(props) {
    super(props);
    this.state = {
      loading:false,
      imageUrl:null,
    };
  }
  render(){
    let uploadButton=(
      <div >
        <Icon style={{fontSize:'20px'}} type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">上传</div>
      </div>
    )
    return(
      <Fragment>
        <Upload
        showUploadList={false}
        //action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={file=>this.beforeUpload(file)}
        onPreview={this.handlePreview}

        //onChange={(file)=>this.handleChange(file)}
        
      >
        {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
      </Fragment>
    )
  }
  handleChange(e){
    console.log(e,'e')
  }
  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  handlePreview=async file=>{
    console.log(file,'file')
    let imageUrl=await this.getBase64(file.originFileObj);
    console.log(imageUrl,'imageUrl')
    this.setState({imageUrl},()=>{
      console.log(this.state.imageUrl)
    })

  }
  beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
}
