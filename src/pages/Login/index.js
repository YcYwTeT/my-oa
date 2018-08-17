
import React, { Component } from 'react';
import './index.css'
import connect from '../../modules/connect'
import {message} from 'antd'

class Login extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this)
    }
    login(){
        let that = this;
        let username = this.username.value;
        let password = this.password.value;
        message.config({
            top: '20%',
            duration: 1,
        })
        this.props.commons_action.login({
            username,password,
            success(){
                that.props.history.push('/')
            },
            error(){
                message.error('Incorrect username or password');
            }
        })
    }
    render(){
        return (
            <div className = "app-login">
                <div className="login_m">
                    <div className="login_logo"><img src="/images/logo.png" width="196" height="46"/></div>
                    <div className="login_boder">
                        <div className="login_padding" id="login_model">
                            <h2>USERNAME</h2>
                            <label>
                                <input type="text" id="username" ref={el => this.username = el} className="txt_input txt_input2" placeholder="Your name"/>
                            </label>
                            <h2>PASSWORD</h2>
                            <label>
                                <input type="password" ref={el => this.password = el} name="textfield2" id="userpwd" className="txt_input" placeholder="Your password"/>
                            </label>
                            <div className="rem_sub">
                                <div className="rem_sub_l">
                                    <input type="checkbox" name="checkbox" id="save_me"/>
                                    <label htmlFor="checkbox">Remember me</label>
                                </div>
                                <label>
                                    <input type="submit" className="sub_button" onClick={this.login} name="button" id="button" value="SIGN-IN" style={{opacity: 0.7}}/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(Login,'commons');