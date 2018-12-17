import {PRODUCT_TABLE_DATA_CHANGED} from '../../Constants/ActionType';



export default function ProductReducer(state= [], action) {
    switch(action.type){
        case PRODUCT_TABLE_DATA_CHANGED:
            return { ...state , productList: action.payload};
        default:
        return state;
    }
};