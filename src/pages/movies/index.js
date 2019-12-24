import React from "react";
import styles from "./movies.less";
import { Input, Select, DatePicker,Button,Table  } from "antd";
import { connect } from "dva";
import AddMovie from './components/AddMovie'

@connect(({ movies }) => ({ movies }))
export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddMovie:false
    };
  }
  
  render() {
    return (
      <div>
        <div className={styles.main_01}>
          <Input
            style={{ width: "200px" }}
            placeholder={"请输入电影名称"} //输入框默认内容	string
            //value={""}	//输入框内容	string
            onChange={this.changeIpnut} //输入框内容变化时的回调	function(e)
          ></Input>
          <Select style={{ width: "200px", marginLeft: "30px" }}>
            <Option value="">全部</Option>
            <Option value="喜剧">喜剧</Option>
          </Select>
          <DatePicker
            style={{ marginLeft: "30px" }}
            onChange={this.onChangePickerDate}
            placeholder={"请输入上映日期"}
            showToday={false}
          ></DatePicker>
          <Button style={{marginLeft:'30px'}} type="primary">搜索</Button>
          <Button style={{marginLeft:'30px'}}>重置</Button>
          <Button 
          style={{marginLeft:'30px'}} 
          type="primary"
          onClick={()=>this.addMovie()}>创建</Button>
        </div>
        <div className={styles.main_02}>
          <Table 
          rowSelection={this.props.movies.rowSelection} 
          dataSource={this.props.movies.dataSource} 
          columns={this.props.movies.columns} />
        </div>
        <div className={styles.main_03}>
          {this.state.showAddMovie?
            <AddMovie closeModal={()=>this.setState({showAddMovie:false})}></AddMovie>:null
          }
        </div>


      </div>
    );
  }
  onChangePickerDate(date, dateString) {
    console.log(date, dateString);
  }
  changeIpnut = e => {
    console.log(e, "e");
  }
  addMovie(){
    this.setState({showAddMovie:true});
  }
}
