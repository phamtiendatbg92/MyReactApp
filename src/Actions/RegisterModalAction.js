import { UPLOAD_PRODUCT_OPEN_MODAL, MODAL_DATA_CHANGED } from '../Constants/ActionType';

export function ModalChanged(showModal) {
    return {
        type: UPLOAD_PRODUCT_OPEN_MODAL,
        payload: showModal,
    }
}

export function ModalDataChanged(data) {
    return {
        type: MODAL_DATA_CHANGED,
        payload: data,
    }
}