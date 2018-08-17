
import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import App from '../App';

//路由加载路径
import Login from '../pages/Login';
import Admin from '../Admin';
import connect from '../modules/connect'

import RouterAll from './Routers';

export default class extends Component{
    render(){
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/" render = {() => {
                            return (
                                <Admin>
                                    <Switch>
                                        <RouterAll></RouterAll>
                                    </Switch>
                                </Admin>
                            )
                        }}>
                        </Route>
                    </Switch>
                </App>
            </Router>
        )
    }
};