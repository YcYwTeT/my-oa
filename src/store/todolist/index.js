//写reducer

import state from './state';
import {ADD_TODO} from './const'

let reducer = (previousState=state,action) => {
    let new_state = {...previousState};
    new_state.todos = previousState.todos.slice();
    switch(action.type) {
        case ADD_TODO:
            new_state = newTodo(new_state,action.title)
            break;
        default: 
            break;
    }
    return new_state
}

export default reducer;

const newTodo = (state,title) => {
    state.todos.push({
        id: ++state.id,
        todo: title,
    })
    return state
}
