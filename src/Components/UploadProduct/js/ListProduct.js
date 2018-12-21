import React from 'react';
import Product from './Product';
import '../css/ListProduct.css';
import {connect} from 'react-redux';
class ListProduct extends React.Component {

 
  renderProduct() {
    return this.props.productList.map(item => <Product key={item.no} data={item} />);
  }
  render() {
    return (
      <table className='uploadproduct-product-table'>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Product Name</th>
            <th>Branch</th>
            <th>Sub-Branch</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.renderProduct()}
        </tbody>
      </table>

    );
  }
}

function mapStateToProps(state) {
  return {
    productList: state.productReducer.productList,
  };
}
const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);