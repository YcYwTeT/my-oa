import React, { Component } from 'react';

class Myget extends React.Component {
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
        Myget
      </div>
    )
  }
}
  

export default Myget;