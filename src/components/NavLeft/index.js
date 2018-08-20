
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {withRouter} from 'react-router-dom';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class NavLeft extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.renderMenus = this.renderMenus.bind(this)
        this.state = {
            collapsed: false,
            openKeys: [this.handleOpenKey()]
        }
       
    }
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
    handleClick(item){
        this.props.history.push(item.key)
    }
    handleOpenKey(){
        let {pathname} = this.props.location;
        let {menus} = this.props;
        if(!menus) return '1'
        let {result} = this.props.menus;
        for(var i = 0; i < result.length; i++){
            if(result[i].path === pathname){
                this.setState({
                    openKeys: result[i].type_id - 1
                })
            }
        }
    } 
    shouldComponentUpdate(props){
        if(props.location.pathname === this.props.location.pathname && this.props.menus){
            return false
        }
        return true;
    }
    renderMenus(){
        if(!this.props.menus) return '';
        let { result } = this.props.menus;
        let { menus_type_arr } = this.props.menus;
        return (<Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse} 
        >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['/']} mode="inline">
                {
                    !menus_type_arr ? '' : menus_type_arr.map(item => {
                        for(var i = 0; i < result.length; i++ ){
                            if(result[i].type === item.type) {
                                if(result[i].type === result[i].title) {
                                    return (
                                        <Menu.Item key={result[i].path} onClick={this.handleClick}>
                                            <Icon type="pie-chart" />
                                            <span>{item.type}</span> 
                                        </Menu.Item>
                                    )
                                } else {
                                    return (
                                        <SubMenu
                                        key={item.id} onTitleClick={this.onTitleClick}
                                        title={<span><Icon type="team" /><span>{item.type}</span></span>}
                                        onTitleClick = {this.onTitleClick}
                                        >
                                            {
                                                result.map(item_s => {
                                                    if(item_s.type === item.type){
                                                        return (
                                                            <Menu.Item  onClick={this.handleClick} key={item_s.path}>{item_s.title}</Menu.Item>         
                                                        )
                                                    }
                                                })
                                            }
                                        </SubMenu>
                                    )
                                }
                            }
                        }
                    })
                }
            </Menu>
        </Sider>)
    }
    render(){
        return (
            <div className = "nav-Left" style={{background: '#001529'}}>
                {this.renderMenus()}
            </div>
        )
    }
}



export default withRouter(NavLeft);

