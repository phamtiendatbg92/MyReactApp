import {UPLOAD_PRODUCT_OPEN_MODAL} from 'Constants/ActionType';

const initState = {
    
}
export default function MyReducer(state= [], action) {
    switch(action.type){
        case UPLOAD_PRODUCT_OPEN_MODAL:
            return { ...state , showModel: action.payload};
        default:
        return state;
    }
};