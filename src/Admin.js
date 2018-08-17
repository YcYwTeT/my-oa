
import React, { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import NavLeft from './components/NavLeft';
import connect from '../src/modules/connect';
import Routers from './router/Routers';
const { Header, Content, Footer } = Layout;



class Admin extends Component {
  componentWillMount(){
    let { getMenus } = this.props.commons_action;
    getMenus();
  }
  render() {
    let {menus} = this.props.commons;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <NavLeft menus={menus}></NavLeft>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' ,height: '100%',boxSizing: 'border-box'}}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 ,}}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout> 
    );
  }
}
  

export default connect(Admin,'commons');