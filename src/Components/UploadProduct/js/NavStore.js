import React from 'react'
import NavStoreItem from './NavStoreItem';
import '../css/NavStore.css';
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

export default NavStore;