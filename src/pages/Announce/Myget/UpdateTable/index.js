import React, { Component } from 'react';
import { List, Avatar , Modal ,Button, Input, Form, Select, Icon, Col, Row , message} from 'antd';
import connect from '../../../../modules/connect';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
class UpdateTableItem extends Component {
    constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this)
      this.resetFields = this.resetFields.bind(this)
      this.handleSelectChange = this.handleSelectChange.bind(this)
    }
    state = {
        type_id: this.props.info.type_id
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let {id,boards,changeBoards,handleCancel} = this.props.info;
                for(var i = 0 ; i < boards.length; i++){
                    if(boards[i].id === id){
                        if(boards[i].content !== values.content || boards[i].title !== values.title || boards[i].type !== values.type){
                            boards[i] = {
                                id,
                                title: values.title,
                                content: values.content,
                                people: this.props.commons.user_state.name,
                                date: this.handleDate(),
                                type: values.type,
                                type_id: this.props.info.type_id
                            }
                            //更改数据库
                            this.$http({
                                url:'/updateBoards',
                                params: {
                                    title: values.title,
                                    content: values.content,
                                    people: this.props.commons.user_state.name,
                                    date: this.handleDate(),
                                    type: values.type,
                                    type_id: this.props.info.type_id,
                                    id
                                }
                            })
                            handleCancel()
                        } else {
                            message.config({
                                top: 100,
                                duration: 1,
                            });
                            message.error('未作任何修改');
                        }
                        break;
                    }
                }
                changeBoards(boards)
            }
        });
    }
    resetFields = () => {
      this.props.form.resetFields();
    }
    handleDate = () => {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let date = now.getDate();
      return `${year}-${month}-${date}`;
    }
    handleSelectChange = (value,info) => {
        this.setState({
            type_id: info.props.type_id
        })
    }
    render(){
        console.log('render')
      const { getFieldDecorator} = this.props.form;
      let {title,content,id,type} = this.props.info;
      return (
        <div>
          <Form onSubmit={this.handleSubmit}  className="login-form">
            <FormItem label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input your title!'}],initialValue:title
                ,id:id})(
                <Input  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Your title"/>
              )}
            </FormItem>
            <FormItem label="Content">
            {getFieldDecorator('content', {
              rules: [{ required: true, message: 'Please input your Content!' }],initialValue:content,id:id
            })(
              <TextArea prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Your Content" onPressEnter={this.handleSubmit} rows={10}/>
            )}
          </FormItem>
          <FormItem label="Type">
            {getFieldDecorator('type', {
              rules: [{ required: true, message: 'Please input your Content!' }],initialValue:type
            ,id:id})(
                <Select style={{ width: 120 }} onChange={this.handleSelectChange}>
                    <Option value="公司" type_id="1">公司</Option>
                    <Option value="个人" type_id="3">个人</Option>
                </Select>
            )}
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
  const UpdateTable = Form.create()(UpdateTableItem);
  export default connect(UpdateTable,'commons');