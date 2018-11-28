import {UPLOAD_PRODUCT_OPEN_MODAL} from '../Constants/ActionType';

export function ModalChanged (showModal){
    return {
        type: UPLOAD_PRODUCT_OPEN_MODAL,
        payload: showModal,
    }
}