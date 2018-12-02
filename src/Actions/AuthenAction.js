import {SET_AUTHEN_STATE, SET_USER_ROLE} from '../Constants/ActionType';

export function setAuthenState(isAuthen){
    return {
        type: SET_AUTHEN_STATE,
        payload: isAuthen,
    }
}

export function setUserRole(role){
    return {
        type:SET_USER_ROLE,
        payload: role
    }
}