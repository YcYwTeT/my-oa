
import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import App from '../App';

//路由加载路径
import Home from '../pages/Home';
import Login from '../pages/Login';


export default class extends Component{
    render(){
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/login" component={Login}></Route>
                    </Switch>
                </App>
            </Router>
        )
    }
};