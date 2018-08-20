
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import NavLeft from './components/NavLeft';
import connect from '../src/modules/connect';
import BreadCrumb from './components/Breadcrumb'
const { Header, Content, Footer } = Layout;



class Admin extends Component {
  componentWillMount(){
    let { getMenus } = this.props.commons_action;
    getMenus();
  }
  componentWillReceiveProps(){

  }
  render() {
    let {menus} = this.props.commons;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <NavLeft menus={menus}></NavLeft>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' ,height: '100%',boxSizing: 'border-box'}}>
            <BreadCrumb style={{ margin: '16px 0' }} menus={menus}>
            </BreadCrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 , height: 480 , position: 'relative'}}> 
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' ,paddingTop: 16, paddingBottom: 16}}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout> 
    );
  }
}
  

export default connect(Admin,'commons');