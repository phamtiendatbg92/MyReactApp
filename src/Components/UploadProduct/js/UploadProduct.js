import React from 'react';
import '../css/UploadProduct.css';
import MyButton from 'Common/MyButton.js';
import ListProduct from './ListProduct';
import { ModalChanged } from 'Actions/UpLoadProductAction';
import { connect } from 'react-redux';
import RegisterProduct from './RegisterProduct';
import NavStore from './NavStore';
class UploadProduct extends React.Component {

    constructor(props) {
        super(props);

        this.addNewBtnOnClick = this.addNewBtnOnClick.bind(this);

    }
    addNewBtnOnClick() {

        this.props.ModalChanged(true);
    }
    renderStoreNav(){
        console.log(this.props.userRole);
        if(this.props.userRole == 1){
            return <NavStore />;
        }
    }

    render() {
        return (
            <div>
                <h1 className='upload-product-mainframe'>Danh sách cửa hàng</h1>
                {this.renderStoreNav()}
                <ListProduct />
                <MyButton onClick={this.addNewBtnOnClick}>Add new</MyButton>
                <RegisterProduct />
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        showModel: state.upLoadProductReducer.showModel,
        userRole: state.userReducer.role,
    };
}
const mapDispatchToProps = {
    ModalChanged,
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadProduct);