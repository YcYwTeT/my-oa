import React, { Component } from 'react';
import './index.scss'


class Approve extends React.Component {
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
        Approve
      </div>
    )
  }
}
  

export default Approve;