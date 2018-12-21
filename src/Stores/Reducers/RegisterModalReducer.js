import { UPLOAD_PRODUCT_OPEN_MODAL, MODAL_DATA_CHANGED } from 'Constants/ActionType';

const initState = {
    product: {
        productName: "",
        branch: "",
        subBranch: "",
        price: 0,
    }
}
export default function MyReducer(state = initState, action) {
    switch (action.type) {
        case UPLOAD_PRODUCT_OPEN_MODAL:
            return { ...state, showModel: action.payload };
        case MODAL_DATA_CHANGED:
            return { ...state, product: action.payload };
        default:
            return state;
    }
};