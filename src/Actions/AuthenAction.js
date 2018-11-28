import {SET_AUTHEN_STATE} from '../Constants/ActionType';

export function setAuthenState(isAuthen){
    return {
        type: SET_AUTHEN_STATE,
        payload: isAuthen,
    }
}