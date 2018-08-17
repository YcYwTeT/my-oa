import React, { Component } from 'react';
import './index.scss'


class Data extends React.Component {
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
        Data
      </div>
    )
  }
}
  

export default Data;