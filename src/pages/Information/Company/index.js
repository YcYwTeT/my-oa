import React, { Component } from 'react';
import './index.scss'


class Company extends React.Component {
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
        Company
      </div>
    )
  }
}
  

export default Company;