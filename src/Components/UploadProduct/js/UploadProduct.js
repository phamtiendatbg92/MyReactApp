import React from 'react';
import '../css/UploadProduct.css';
import MyButton from 'Common/MyButton.js';
import TextUtility from 'Utilities/TextUltility';
import ListProduct from './ListProduct';
class UploadProduct extends React.Component {

    constructor(props){
        super(props);
        
        
        this.onClick = this.onClick.bind(this);
    }
    onClick (){
        console.log(TextUtility());
    }
    render() {
        return (
            <div>
                <h1 className='upload-product-mainframe'>Upload product page</h1>
                <ListProduct/>
                <MyButton onClick={this.onClick}>Add new</MyButton>
            </div>

        );
    }
}

export default UploadProduct;