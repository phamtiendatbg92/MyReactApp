import React from 'react';
import "../css/Product.css";
import { connect } from 'react-redux';
import { ModalChanged, ModalDataChanged } from 'Actions/RegisterModalAction';
import { setProductList } from 'Actions/ProductAction';
class Product extends React.Component {

    constructor() {
        super();
        this.editBtnOnClick = this.editBtnOnClick.bind(this);
        this.removeBtnOnClick = this.removeBtnOnClick.bind(this);
    }
    editBtnOnClick() {
        this.props.ModalDataChanged(this.props.data);
        this.props.ModalChanged(true);
    }
    removeBtnOnClick() {
        const result = window.confirm("Bạn chắc chắn muốn xóa?");
        if (result) {
            let {productList} = this.props;
            const index = this.props.data.no - 1;
            productList.splice(index, 1);
            productList.forEach((element, index) => {
                element.no = index + 1;
            });
            const newArr = productList.slice();
            this.props.setProductList(newArr);
        }
    }
    render() {
        return (
            <tr className="product-mainframe">
                <td>{this.props.data.no}</td>
                <td>{this.props.data.productName}</td>
                <td>{this.props.data.branch}</td>
                <td>{this.props.data.subBranch}</td>
                <td>
                    <span>{this.props.data.price}</span>
                    <img src={require('Images/edit-icon.png')} alt="loading"
                        onClick={this.editBtnOnClick} />
                    <img src={require('Images/remove-icon.png')} alt="loading"
                        onClick={this.removeBtnOnClick} />
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    return {
        productList: state.productReducer.productList,
    };
}

const mapActionToProps = {
    ModalChanged,
    ModalDataChanged,
    setProductList,
}

export default connect(mapStateToProps, mapActionToProps)(Product);