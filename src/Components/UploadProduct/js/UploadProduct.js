import React from 'react';
import '../css/UploadProduct.css';
import MyButton from 'Common/MyButton.js';
import ListProduct from './ListProduct';
import { ModalChanged, ModalDataChanged } from 'Actions/RegisterModalAction';
import { connect } from 'react-redux';
import RegisterProduct from './RegisterProduct';
import NavStore from './NavStore';
import ProductObject from 'Objects/ProductObject'
class UploadProduct extends React.Component {

    constructor(props) {
        super(props);

        this.addNewBtnOnClick = this.addNewBtnOnClick.bind(this);
        
    }
    addNewBtnOnClick() {
        
        this.props.ModalDataChanged(new ProductObject(-1, "", "" ,"" , 0));
        this.props.ModalChanged(true);
    }
    renderStoreNav(){
        if(this.props.userRole === 1){
            return <NavStore />;
        }
    }

    render() {
        return (
            <div>
                <h1 className='upload-product-mainframe'>Danh sách cửa hàng</h1>
                {/* {this.renderStoreNav()} */}
                <ListProduct />
                <MyButton onClick={this.addNewBtnOnClick}>Add new</MyButton>
                <RegisterProduct />
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        showModel: state.registerModalReducer.showModel,
        userRole: state.userReducer.role,
    };
}
const mapDispatchToProps = {
    ModalChanged,
    ModalDataChanged,
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadProduct);