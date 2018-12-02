import UploadProduct from './js/UploadProduct';
import {connect} from 'react-redux';

function mapProperties(state){
    return {
        isAuthen: state.userReducer.role,
    };
}

const mapActions = {
};

export default connect(mapProperties, mapActions)(UploadProduct);