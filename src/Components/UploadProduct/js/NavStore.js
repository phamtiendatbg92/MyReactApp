import React from 'react'
import NavStoreItem from './NavStoreItem';
import '../css/NavStore.css';
import {connect} from 'react-redux';
import {setProductList} from '../../../Actions/ProductAction'
class NavStore extends React.Component{

    constructor(){
        super();
        this.state = {selectedID : 0};

        let data = [];
        for(let i = 0; i < 5 ; i++){
            const storeName = `Store ${i}`;
            const storeItem = {
                storeName : storeName,
            }
            data.push(storeItem);
        }
        this.storeArr = data;
        this.onclickItem = this.onclickItem.bind(this);
    }
    onclickItem(index){
        this.setState({ selectedID: index });
        const data = [];
        for (let i = 0; i < 3; i++) {
        data[i] = {
            no: i,
            productName: "product name " + index,
            branch: "branch " + index,
            subBranch: "sub-branch " + index,
            price: index*1000,
            inventory: 1 + index
            }
        }
        this.props.setProductList(data);
    
    }
    renderListStore(){
        return this.storeArr.map((item, index) => {
            return <NavStoreItem key={index} 
                                onclickItem={()=> this.onclickItem(index)} 
                                storeName={item.storeName}
                                isActive={index===this.state.selectedID}
                                id={index} />;
        });
    }
    render(){
        return(
            <div className='nav-store-mainframe'>
                {this.renderListStore()}
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        
    }
}
const mapDispatchToProps = {
    setProductList
}

export default connect(mapStateToProps, mapDispatchToProps)(NavStore);