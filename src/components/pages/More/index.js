
import React, { Component } from 'react';
import Content from './content';
import Input from './input';

class Template extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return (
            <div className = "template">
                这是首页
                <Input/>
                <Content></Content>
            </div>
        )
    }
}

export default Template;