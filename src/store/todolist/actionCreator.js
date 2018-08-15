import {ADD_TODO} from './const';

const actionCreator = {
    addNewTodo(title){
        // backTime().then(res => {
        //     let action = {
        //         type: ADD_TODO,
        //         title
        //     }
        //     return action
        // })
        return (dispatch) => {
            backTime(title).then(res => {
                let action = {type: ADD_TODO,title}
                dispatch(action)
            })
        } 
    }
}

export default actionCreator;

const backTime = (title) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        },1000)
    })
}