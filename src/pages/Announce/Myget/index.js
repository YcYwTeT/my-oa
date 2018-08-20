import React, { Component } from 'react';
import { List, Avatar , Modal ,Button, Input, Form, Select, Icon, Col, Row } from 'antd';
import connect from '../../../modules/connect'
import UpdateTable from './UpdateTable'
import './index.scss'

const Context = React.createContext();
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

class Myget extends Component {
  constructor(props){
    super(props);
    this.handleCancel = this.handleCancel.bind(this)
    this.showModal = this.showModal.bind(this)
    this.changeBoards = this.changeBoards.bind(this)
    this.delectBoard = this.delectBoard.bind(this)
  }
  state = {
    collapsed: false,
    boards: [],
    title: '',
    content: '',
    type: '',
    type_id: '',
    footerLength: 1,
    visibleUpdate: false,
    id: null
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  changeBoards(boards){
    this.setState({
      boards,
    })
  }
  //获取所有公告
  getBoards(){
    this.$http({
      url: '/getDatas',
      params: {
        table: 'boards',
        order: 'desc'
      },
      method: 'post'
    }).then(res => {
      if(res.data.status){
        this.setState({
          boards: res.data.data,
        })
      }
    }) 
  }
  handleCancel = () => {
    this.setState({
      visible: false,
      visibleUpdate: false
    }); 
  }
  showModal = (item,bool) => {
    if(bool) {
      this.setState({footerLength: 0})
    } else {
      this.setState({footerLength: 1})
    }
    this.setState({
      visible: true,
      title: item.title,
      content: item.content,
      id: item.id,
      type: item.type,
      type_id: item.type_id
    });
  }
  delectBoard = (id) => {
    let { boards } = this.state;
    for(var i = 0; i < boards.length; i++){
      if(boards[i].id === id){
        this.$http({
          url: '/deleteSpecial',
          params: {
            id
          },
          method: 'post'
        })
        boards.splice(i,1)
        this.setState({
          boards
        })
        break;
      }
    }
  }
  componentWillMount(){
    this.getBoards();
  }
  render() {
    let {boards} = this.state;
    if(!boards) return false;
    let {title,content,id,type,type_id} = this.state;
    let {name} = this.props.commons.user_state
    const footer = [
        <Button key="取消" onClick={this.handleCancel}>取消</Button>,
      ]
    footer.length = this.state.footerLength;
    return (
      <Context.Provider value={{title,content,id,boards,type,type_id,changeBoards:this.changeBoards,handleCancel:this.handleCancel}}>
        <div className="myget" style={{paddingTop: '15px'}}>
          <Button onClick={() => {this.setState({visibleUpdate:true})}} type={'primary'} style={{position:'absolute',right: 0,top: 0,margin: '10px 40px'}}>新增</Button>
          <List
            itemLayout="horizontal"
            dataSource={boards}
            style={{height: 420}}
            renderItem={item => {
                return (
                  <div>
                    <List.Item  actions={[<a onClick={this.showModal.bind(null,item,false)}>查看</a>,<a onClick={this.showModal.bind(null,item,true)}>修改</a>, <a onClick={this.delectBoard.bind(null,item.id)}>删除</a>]}>
                      <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description={<div><span style={{marginRight: '10px'}}>{item.people}</span><span>{item.date}</span><p style={{fontSize:'12px'}}>类型:{item.type}</p></div>}
                      />
                      {item.content}
                    </List.Item>
                  </div>
              )}
            }
            pagination={{
              pageSize: 5,
            }}
          />
        <OAModal
            changeBoards={this.changeBoards}
            title={title}
            visible={this.state.visible}
            onOk={this.handleOk}
            footer={footer}
            onCancel={this.handleCancel}
            content={content}
          >
        </OAModal>
        <Modal
            title={footer.length === 0 ? '新增' : this.props.title}
            visible={this.state.visibleUpdate}
            onOk={this.handleOk}
            footer={false}
            onCancel={this.handleCancel}
            maskClosable={false}

          >
          <MyTable onCancel={this.handleCancel} changeBoards={this.changeBoards} name={name} boards={boards}></MyTable>
        </Modal>
      </div>
      </Context.Provider>
    )
  }
}

class CreateTable extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetFields = this.resetFields.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  state = {
    type: '公司',
    type_id: 1
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let id = this.props.boards[0].id + 1;
        this.board = {
          id,
          title: values.title,
          content: values.content,
          people: this.props.name,
          type: this.state.type,
          type_id: this.state.type_id,
          date: this.handleDate()
        }
        //插入数据库
        this.$http({
          url: '/insertBoards',
          params: this.board,
          method: 'post'
        })
        this.props.boards.unshift(this.board);
        this.props.changeBoards(this.props.boards)
        this.props.onCancel()
        this.resetFields()
      }
    });
  }
  resetFields = () => {
    this.props.form.resetFields();
  }
  handleChange = (value,info) => {
    this.setState({type: value,type_id: info.props.type_id})
  } 
  handleDate = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    return `${year}-${month}-${date}`;
  }
  render(){
    const { getFieldDecorator} = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}  className="login-form">
          <FormItem label="Title">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input your title!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Your title" />
            )}
          </FormItem>
          <FormItem label="Content">
          {getFieldDecorator('content', {
            rules: [{ required: true, message: 'Please input your Content!' }],
          })(
            <TextArea prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Your Content" onPressEnter={this.handleSubmit} rows={10}/>
          )}
        </FormItem>
        <FormItem label="Type">
        <Select defaultValue="公司" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="公司" type_id="1">公司</Option>
          <Option value="个人" type_id="3">个人</Option>
        </Select>
        </FormItem>
        <Row>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{marginRight: '20px'}}>
              确定
            </Button>
            <Button type="default" htmlType="reset" onClick={this.resetFields}>
              重置
            </Button>
          </Col>
        </Row>
        </Form>
      </div>
    )
  }
}

const MyTable = Form.create()(CreateTable);

class OAModal extends Component{
  render(){
      return (
        <Modal
            title={this.props.footer.length === 0 ? '修改' : this.props.title}
            visible={this.props.visible}
            onOk={this.props.onOk}
            footer={this.props.footer.length === 0 ? false : this.props.footer}
            onCancel={this.props.onCancel}
            maskClosable={false}
            destroyOnClose={true}
          >
          <div>{this.props.footer.length === 0 ? 
          <Context.Consumer>
            {info => <UpdateTable info={info} />}
          </Context.Consumer> 
          : this.props.content}</div>
        </Modal>
      )
  }
}


export default connect(Myget,{reducer:'commons',state:['user_state']});