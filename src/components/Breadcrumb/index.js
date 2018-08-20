import React, {Component} from 'react';
import { Breadcrumb } from 'antd';
import {withRouter, Link} from 'react-router-dom';

class BreadCrumb extends Component {
    constructor(props){
        super(props);
        this.renderItems = this.renderItems.bind(this)
    }
    renderItems(){
        if(!this.props.menus) return false;
        let routes = [(<Breadcrumb.Item key={'/'}>
            <Link to={'/'}>后台首页</Link>
            </Breadcrumb.Item>)]
        let {result} = this.props.menus;
        let {pathname} = this.props.location;
        for(var i = 0; i < result.length; i++){
            if(result[i].path === pathname){
                if(result[i].type !== result[i].title){
                    routes.push(<Breadcrumb.Item key={i}>
                                    {result[i].type}
                                </Breadcrumb.Item>)
                    routes.push(<Breadcrumb.Item key={i}>
                                    {result[i].title}
                                </Breadcrumb.Item>)
                } else {
                    routes.push(<Breadcrumb.Item key={i}>
                        <Link to={result[i].path}>{result[i].title}</Link>
                    </Breadcrumb.Item>)
                }
                break;
            }
        }
        return routes
    }
    render(){
        return (
            <Breadcrumb>
                {this.renderItems()}
            </Breadcrumb>
        )
    }
}

export default withRouter(BreadCrumb);