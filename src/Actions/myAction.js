import {TEXT_CHANGED} from '../Constants/actionStype';

export function TextChanged (text){
    return {
        type: TEXT_CHANGED,
        text: text,
    }
}