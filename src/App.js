import React, { Component } from 'react';
import connect from '../src/modules/connect';
import { withRouter } from 'react-router-dom';
import Loading from './components/Loading';
import bus from './components/bus'

class App extends Component {
  constructor(props){
    super(props);
    this.checkout = this.checkout.bind(this)
    this.state = {
      isLoading: false
    }
  }
  componentWillReceiveProps(props){
    if(props.location.pathname !== this.props.location.pathname){
      this.props.commons_action.checkSession(() => {
        this.checkout(this.props)
      })
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
    bus.on('change_loading',(bool=false) => {
      this.setState({isLoading: bool})
    })
  }
  render() {
    return (
      <div className="App">
          {this.props.children}
          <Loading loading={this.state.isLoading}></Loading>
      </div>
    );
  }
}

export default withRouter(connect(App,'commons'))
