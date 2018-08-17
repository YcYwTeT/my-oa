
import { CHANGE_USER_STATE, CHANGE_MENUS } from './const';
import http from '../../modules/http'

let actionCreator = {
    //修改login状态
    login({username,password,success,error}){
        let action = null;
        return dispatch => {
            http({
                url: '/login',
                method: 'post',
                params: {
                    username,password
                }
            }).then(res => {
                if(res.data.status){
                    action = {
                        type: CHANGE_USER_STATE,
                        user_state: res.data.data[0]
                    }
                    sessionStorage.user_state = JSON.stringify(res.data.data[0])
                    dispatch(action);
                    success();
                } else {
                    error();
                }
            })
        }
    },
    checkSession(callback){
        if(!sessionStorage.user_state) callback()
        let action = {
            type: CHANGE_USER_STATE,
            user_state: JSON.parse(sessionStorage.user_state || '{}')
        }
        return action
    },
    getMenus(){
        return (dispatch) => {
            http({
                url: '/menus'
            }).then(res => {
                if(res.status === 200 && res.data.status){
                    let action = {
                        type: CHANGE_MENUS,
                        data: res.data.data
                    }
                    dispatch(action);
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
}

export default actionCreator;