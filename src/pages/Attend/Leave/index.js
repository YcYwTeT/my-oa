
import React, { Component } from 'react';
import './index.scss'

class Leave extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <div>
        Leave
      </div>
    )
  }
}
  

export default Leave;