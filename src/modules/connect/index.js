import {connect} from 'react-redux';
import actionCreators from './actionCreators';
import {bindActionCreators} from 'redux';

//connect('UIComponent','todolist')
//connect('UIComponent',{reducer: 'todolist'})

let _connect = (UIComponent,...reducerObtions) => {

    let mapStateToProps = (state) => {
        //如果什么都没传，则返回state的所有东西
        if(!reducerObtions) return state
        
        let _state = {}

        //reducerObtions = [{reducer: 'todolist'}] / ['todolist']
        reducerObtions.forEach(obj => {
            // obj = 'todolist'
            if(typeof(obj) === 'string') {
                if(state[obj]) {
                    _state[obj] = state[obj]
                }
            } else {
                //如果obj不是字符串 obj = {reducer:'todolist'} 返回{todolist,}
                if(state[obj.reducer]) {
                    if(!obj.state || !obj.state.length) {
                        _state[obj.reducer] = state[obj.reducer] 
                    } else {
                        //如果为数组： 返回{todolist: {a: 1,b: 2}}
                        _state[obj.reducer] = {}
                        obj.state.forEach(s => {
                            _state[obj.reducer][s] = state[obj.reducer][s]
                        })
                    }
                }
            }
        })
        return _state
    }

    let mapDisPatchToProps = (dispatch) => {
        // bindActionCreators
        if(!reducerObtions) return {};
        let actions = {};
        reducerObtions.forEach(obj => {
            if(typeof(obj) === 'string'){
                if(actionCreators[obj]) {
                    actions[obj + '_action'] = bindActionCreators(actionCreators[obj],dispatch)
                }
            } else {
                if(actionCreators[obj.reducer]){
                    actions[obj.reducer + '_action'] = bindActionCreators(actionCreators[obj.reducer],dispatch)
                }
            }
        })

        return actions
    }

    return connect(mapStateToProps,mapDisPatchToProps)(UIComponent)
}

export default _connect