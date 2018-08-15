
import React, { Component } from 'react'
import './index.scss'
import HomeBanner from './HomeBanner'

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className = "app-home">
                <HomeBanner />
            </div>
        )
    }
}


export default Home;