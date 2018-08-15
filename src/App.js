import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class App extends Component {
  state = {
    needLogin: []
  }
  componentWillReceiveProps(props){
    console.log(props.location.pathname)
  }
  // checkout(props){
  //   //判断是否要登陆
  //   // if()

  // }
  render() {
    return (
      <div className="App">
          {this.props.children}
      </div>
    );
  }
}

export default <withRouter>App</withRouter>;
