import {PRODUCT_TABLE_DATA_CHANGED} from '../Constants/ActionType';


export function setProductList(data){
    return {
        type: PRODUCT_TABLE_DATA_CHANGED,
        payload : data
    }
}