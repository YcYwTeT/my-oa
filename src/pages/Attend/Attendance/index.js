import React, { Component } from 'react';
import './index.scss'


class Attendance extends React.Component {
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
        Attendance
      </div>
    )
  }
}
  

export default Attendance;