import React, { Component } from 'react';
import './index.scss'


class Mysend extends React.Component {
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
        Mysend
      </div>
    )
  }
}
  

export default Mysend;