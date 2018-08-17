import React, { Component } from 'react';
import connect from '../src/modules/connect';
import { withRouter } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.checkout = this.checkout.bind(this)
  }
  componentWillReceiveProps(props){
    if(props.location.pathname !== this.props.location.pathname){
      this.checkout(props);
    }
  }
  checkout(props){
    //判断是否要登陆
    let {history} = props;
    if(!props.commons.user_state){
      let {pathname} = this.props.location;
      if(pathname !== '/login'){
        history.push('/login')
      }
    }
  }
  componentWillMount() {
    this.props.commons_action.checkSession(() => {
      this.checkout(this.props)
    })
  }
  render() {
    return (
      <div className="App">
          {this.props.children}
      </div>
    );
  }
}

export default withRouter(connect(App,'commons'))
