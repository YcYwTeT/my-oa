
import React, { Component } from 'react';
import actionCreator from '../../../store/todolist/actionCreator'

class Input extends Component{
    constructor(props){
        super(props)
        this.handleEnter = this.handleEnter.bind(this)
    }
    handleEnter(e){
        if(e.keyCode === 13){
            this.store.dispatch(actionCreator.addNewTodo(e.target.value))
            this.el.value = ""
        }
    }
    componentDidMount(){
        this.el.focus();
    }
    render(){
        return (
            <div className = "app-input">
                <input type="text" onKeyUp = {this.handleEnter} ref={el => this.el=el}/>
            </div>
        )
    }
}

export default Input;