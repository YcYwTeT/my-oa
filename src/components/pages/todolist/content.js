
import React, { Component } from 'react';

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
    state = {
        todos: this.store.getState().todolist.todos
    }
    render(){
        let {todos} = this.state
        return (
            <div className = "app-content">
                {
                    todos.map(item => {
                        return (
                            <TodoItem key={item.id} todo={item.todo}></TodoItem>
                        )
                    })
                }
            </div>
        )
    }
}

export default Content;