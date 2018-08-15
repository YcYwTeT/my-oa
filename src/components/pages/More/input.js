
import React, { Component } from 'react';
// import actionCreator from '../../../store/todolist/actionCreator'
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
import connect from '../../../modules/connect'

class Input extends Component{
    constructor(props){
        super(props)
        this.handleEnter = this.handleEnter.bind(this)
    }
    handleEnter(e){
        if(e.keyCode === 13){
            // this.store.dispatch(actionCreator.addNewTodo(e.target.value))
            this.props.todolist_action.addNewTodo(e.target.value)
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addNewTodo(title){
//             dispatch(actionCreator.addNewTodo(title))
//         }
//     }
// }

// export default connect(state => state,dispatch => bindActionCreators(actionCreator,dispatch))(Input);
export default connect(Input,{reducer: 'todolist'}) 
// export default Input