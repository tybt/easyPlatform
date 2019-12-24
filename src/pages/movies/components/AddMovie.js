import React, { PureComponent, Fragment } from 'react'
import { Modal,Input,Form,Tooltip,Icon,Checkbox} from 'antd';
import UploadImgs from './uploadImgs'
import styles from './AddMovie.less'
const {TextArea} =Input
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

@Form.create()
export default class AddMovie extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render(){
    console.log(this.props,'this.props')
    let {getFieldDecorator}=this.props.form
    return(
      <Fragment>
        <Modal  
        title={"请添加影片"}
        width={900} 
        visible="true" 
        okText={"确定"}
        cancelText={"取消"}
        maskStyle={{zIndex:'999'}}
        onOk={()=>this.handleOk()} 
        onCancel={()=>this.handleCancel()}>
          <div className={styles.form}>
            <div className={styles.brand}>
              <span className={styles.name}><span className={styles.dot}>*</span>片名</span> 
              <Input
              style={{width:'600px'}} 
              placeholder={"请输入片名"}
              ></Input>
            </div>
            <div className={styles.brand}>
              <span className={styles.name}><span className={styles.dot}>*</span>图片</span> 
              <UploadImgs
              style={{width:'600px'}} 
              placeholder={"请输入片名"}
              ></UploadImgs>
            </div>
            <div className={styles.brand}>
              <span className={styles.name}><span className={styles.dot}>*</span>介绍</span> 
              <TextArea
              style={{width:'600px'}} 
              placeholder={"请输入介绍"}
              allowClear={true}
              ></TextArea>
            </div>
            <div className={styles.brand}>
              <span className={styles.name}><span className={styles.dot}>*</span>标签</span> 
              <Checkbox>喜剧</Checkbox>
              <Checkbox>爱情</Checkbox>
              <Checkbox>动漫</Checkbox>
              <Checkbox>战争</Checkbox>
              <Checkbox>科幻</Checkbox>
              <Checkbox>恐怖</Checkbox>
            </div>
            <div className={styles.brand}>
              <span className={styles.name}><span className={styles.dot}>*</span>导演</span> 
              <Input
              style={{width:'600px'}} 
              placeholder={"请输入名字"}
              ></Input>
            </div>
            <div className={styles.brand}>
              <span className={styles.name}><span className={styles.dot}>*</span>主演</span> 
              <Input
              style={{width:'600px'}} 
              placeholder={"请输入主演"}
              ></Input>
            </div>
            <div className={styles.brand}>
              <span className={styles.name}><span className={styles.dot}>*</span>时长</span> 
              <Input
              style={{width:'600px'}} 
              placeholder={"请输入时长"}
              type={"number"}
              ></Input> 分钟
            </div>
            <div className={styles.brand}>
              <span className={styles.name}>视频链接</span> 
              <Input
              style={{width:'600px'}} 
              placeholder={"请输入链接"}
              ></Input>
            </div>
            <div className={styles.brand}>
              <span className={styles.name}><span className={styles.dot}>*</span>导演</span> 
              <Input
              style={{width:'600px'}} 
              placeholder={"请输入名字"}
              ></Input>
            </div>


          </div>

        </Modal>
      </Fragment>
    )
  }
  handleOk(){
    this.props.closeModal()
  }
  handleCancel(){
    this.props.closeModal()
  }
}
