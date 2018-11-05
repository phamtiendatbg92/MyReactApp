import {TEXT_CHANGED} from '../Constants/actionStype';

const initState = {
    text: '',
}
export default function MyReducer(state= [], action) {
    switch(action.type){
        case TEXT_CHANGED:
            return { ...state , text: action.text};

        default:
        return state;
    }
    
};