import React from 'react';
import MyModal from "Common/MyModal.js"
import MyButton from 'Common/MyButton.js';
import { connect } from 'react-redux';
import { ModalChanged, ModalDataChanged } from 'Actions/RegisterModalAction';
import { setProductList } from 'Actions/ProductAction';
import { createObjFromFormData } from 'Utilities/FormUtility';
import MyInputText from 'Common/MyInputText';
import "../css/RegisterProduct.css";
import ProductObject from "Objects/ProductObject";
class RegisterProduct extends React.Component {
    constructor(props) {
        super(props);

        this.cancelBtnOnClick = this.cancelBtnOnClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleTextChange = this.handleTextChange.bind(this);


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
        const formData = createObjFromFormData(data);
        //console.log(createObjFromFormData(data));
        let { productList } = this.props;
        // add new case
        if (this.isAddNew) {
            const length = productList.length;

            const newObj = new ProductObject(length + 1, formData.productName, formData.branch, formData.subBranch, formData.price);
            productList.push(newObj);
            const newArr = [...productList];
            this.props.setProductList(newArr);
        } else { // edit case
            let { product } = this.props;
            product.productName = formData.productName;
            product.branch = formData.branch;
            product.subBranch = formData.subBranch;
            product.price = formData.price;
            productList[product.no - 1] = product;
            const newArr = [...productList];
            this.props.setProductList(newArr);
        }

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

    handleTextChange(event) {
        let { product } = this.props;
        const newObj = Object.assign({}, product);
        switch (event.target.name) {
            case "productName":
                newObj.productName = event.target.value;
                break;
            case "branch":
                newObj.branch = event.target.value;
                break;
            case "subBranch":
                newObj.subBranch = event.target.value;
                break;
            case "price":
                newObj.price = event.target.value;
                break;
            default:
                break;
        }

        this.props.ModalDataChanged(newObj);
    }


    render() {
        const { no, productName, branch, subBranch, price, imgUrl } = this.props.product;

        if (no === -1) {
            this.isAddNew = true;
        }
        else {
            this.isAddNew = false;
        }

        return (
            <MyModal isOpen={this.props.showModel}>
                <form onSubmit={this.handleSubmit}>
                    <MyInputText name="productName" content="Tên Sản Phẩm" value={productName} handleChange={this.handleTextChange} />
                    <MyInputText name="branch" content="Loại Sản Phẩm" value={branch} handleChange={this.handleTextChange} />
                    <MyInputText name="subBranch" content="Loại Sản Phẩm (Nhỏ)" value={subBranch} handleChange={this.handleTextChange} />
                    <MyInputText name="price" content="Giá" value={price} handleChange={this.handleTextChange} />
                    <input type="file" name="productImage" />
                    <br></br>
                    <MyButton >OK</MyButton>
                    <MyButton onClick={this.cancelBtnOnClick}>Cancel</MyButton>
                </form>
            </MyModal>
        );
    }
}
function mapStateToProps(state) {
    return {
        showModel: state.registerModalReducer.showModel,
        product: state.registerModalReducer.product,
        productList: state.productReducer.productList,
    };
}
const mapDispatchToProps = {
    ModalChanged,
    ModalDataChanged,
    setProductList,
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterProduct);