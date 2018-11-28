import React from 'react';
import '../css/UploadProduct.css';
import MyButton from 'Common/MyButton.js';
import ListProduct from './ListProduct';
import { ModalChanged } from 'Actions/UpLoadProductAction';
import { connect } from 'react-redux';
import RegisterProduct from './RegisterProduct';
class UploadProduct extends React.Component {

    constructor(props) {
        super(props);

        this.addNewBtnOnClick = this.addNewBtnOnClick.bind(this);

    }
    addNewBtnOnClick() {

        this.props.ModalChanged(true);
    }

    render() {
        return (
            <div>
                <h1 className='upload-product-mainframe'>Upload product page</h1>
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
    };
}
const mapDispatchToProps = {
    ModalChanged,
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadProduct);