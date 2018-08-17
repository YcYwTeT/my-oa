import React, { Component } from 'react';
import connect from '../modules/connect';
import {Route} from 'react-router-dom';
import Home from '../pages/Home';
import Person from '../pages/Information/Person'
import Company from '../pages/Information/Company'
import Attendance from '../pages/Attend/Attendance'
import Leave from '../pages/Attend/Leave'
import Approve from '../pages/Attend/Approve'
import Myget from '../pages/Announce/Myget'
import Mysend from '../pages/Announce/Mysend'
import Board from '../pages/Announce/Board'
import Data from '../pages/Data'
let RouterArr = new Array(Home,Person,Company,Attendance,Leave,Approve,Myget,Mysend,Board,Data)

class RouterAll extends React.Component {

  render() {
    if(!this.props.commons.menus) return false;
    let {result} = this.props.commons.menus
    return (
      <div>
        {
            result.map((item,i) => {
                return <Route path={item.path} key={item.id} component={RouterArr[i]} exact></Route>
            })
        }
      </div>
    )
  }
}

  

export default connect(RouterAll,'commons');