import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import connect from './modules/connect'

class App extends Component {
  state = {
    needLogin: []
  }
  componentWillReceiveProps(props){
    console.log(props.location.pathname)
  }
  checkout(props){
    //判断是否要登陆
    // if()

  }
  render() {
    return (
      <div className="App">
          {this.props.children}
      </div>
    );
  }
}

export default <withRouter>connect(<App/>)</withRouter>;
