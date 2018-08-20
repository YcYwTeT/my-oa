import React, { Component } from 'react';
import { Spin } from 'antd';
import './index.scss'

class SpinItem extends Component{
    componentWillReceive(){
        console.log(this.props.loading)
    }
    render(){
        let {loading} = this.props;
        if(loading) {
            return (
                <div className="example">
                    <Spin />
                </div>
            )
        }
        return ''
    }
}

export default SpinItem;