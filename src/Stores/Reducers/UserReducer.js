import {SET_AUTHEN_STATE, SET_USER_ROLE} from 'Constants/ActionType';

const initState = {
    isAuthen : false,
    role: 1,
}
export default function (state= initState, action) {
    switch(action.type){
        case SET_AUTHEN_STATE:
            return { ...state , isAuthen: action.payload};
        case SET_USER_ROLE:
            return {...state, role: action.payload};
        default:
        return state;
    }
};