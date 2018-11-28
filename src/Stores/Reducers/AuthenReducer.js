import {SET_AUTHEN_STATE} from 'Constants/ActionType';

const initState = {
    isAuthen : false,
}
export default function (state= initState, action) {
    switch(action.type){
        case SET_AUTHEN_STATE:
            return { ...state , isAuthen: action.payload};
        default:
        return state;
    }
};