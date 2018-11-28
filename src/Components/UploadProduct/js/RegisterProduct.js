import React from 'react';
import Modal from 'react-modal';
import MyButton from 'Common/MyButton.js';
import { connect } from 'react-redux';
import { ModalChanged } from 'Actions/UpLoadProductAction';
import { createObjFromFormData } from 'Utilities/FormUtility';
import MyInputText from 'Common/MyInputText';
Modal.setAppElement('#root');
class RegisterProduct extends React.Component {
    constructor(props) {
        super(props);

        this.cancelBtnOnClick = this.cancelBtnOnClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    cancelBtnOnClick(event) {
        // don't allow form submit
        event.preventDefault();
        // close modal
        this.props.ModalChanged(false);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        console.log(createObjFromFormData(data));


        /*
        fetch('/api/form-submit-url', {
            method: 'POST',
            body: data,
        }).then(function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            response.json().then(function (data){
                console.log(data);
            });

        }).catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
        */
        this.props.ModalChanged(false);
    }

    render() {
        return (
            <Modal isOpen={this.props.showModel}>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="productName">Tên Sản Phẩm</label>
                    <MyInputText id="username" name="productName" />
                    <br />
                    <label htmlFor="branch">Loại Sản Phẩm</label>
                    <MyInputText id="branch" name="branch" />
                    <br />
                    <label htmlFor="subBranch">Loại Sản Phẩm (Nhỏ)</label>
                    <MyInputText id="subBranch" name="subBranch" />
                    <br />
                    <MyButton >OK</MyButton>
                    <MyButton onClick={this.cancelBtnOnClick}>Cancel</MyButton>
                </form>
            </Modal>
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterProduct);