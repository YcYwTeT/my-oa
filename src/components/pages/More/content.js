
import React, { Component } from 'react';
// import { connect } from 'react-redux'
import connect from '../../../modules/connect'
import {DatePicker, Rate} from 'antd'

const TodoItem = ({todo}) => {
    return (
        <div> {todo} </div>
    )
}


class Content extends Component{
    constructor(props){
        super(props)
        this.store.subscribe(() => {
            this.setState({
                todos: this.store.getState().todolist.todos
            })
        })
    }
    // state = {
    //     todos: this.store.getState().todolist.todos
    // }
    render(){
        console.log(this.props)
        let {todos} = this.props.todolist
        return (
            <div className = "app-content">
                {
                    todos.map(item => {
                        return (
                            <TodoItem key={item.id} todo={item.todo}></TodoItem>
                        )
                    })
                }
                <DatePicker></DatePicker>
                <Rate allowHalf></Rate>
            </div>
        )
    }
}
// const mapStateToProps = (state) => {
//     return state.todolist
// }
// export default connect(mapStateToProps)(Content);

export default connect(Content,{reducer:'todolist',state:['todos']})