//合并reducer

import { combineReducers } from 'redux'
import todolist from './todolist'

const reducer = combineReducers({
    todolist
})

export default reducer