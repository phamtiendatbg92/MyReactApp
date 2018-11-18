import React from 'react';
import Product from './Product';
import '../css/ListProduct.css';
class ListProduct extends React.Component{

  constructor(props){
    super(props);
    const data = [];
    for(let i = 0; i < 10; i ++){
      data[i] = {
        no : i,
        productName : "product name",
        branch : "branch",
        subBranch : "sub-branch"
      }
    } 
    this.data = data;
  }
  renderProduct(){
    return this.data.map(item => <Product key={item.no} data={item}/> );
  }
    render(){
        return (

            <table className='uploadproduct-product-table'>
            <thead>
              <tr>
                <th>Stt</th>
                <th>Product Name</th>
                <th>Branch</th>
                <th>Sub-Branch</th>
              </tr>
            </thead>
            <tbody>
              {this.renderProduct()}
            </tbody>
          </table>

        );
    }
}

export default ListProduct;