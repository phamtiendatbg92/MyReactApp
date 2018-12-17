import React from 'react';
import "../css/Product.css";

class Product extends React.Component{
    render(){
        return (
            <tr className="product-mainframe">
                <td>{this.props.data.no}</td>
                <td>{this.props.data.productName}</td>
                <td>{this.props.data.branch}</td>
                <td>{this.props.data.subBranch}</td>
                <td>{this.props.data.price}</td>
                <td>{this.props.data.inventory}</td>
            </tr>
        );
    }
}

export default Product;