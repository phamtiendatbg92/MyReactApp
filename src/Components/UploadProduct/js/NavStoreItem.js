import React from 'react'
import '../css/NavStoreItem.css';
class NavStoreItem extends React.Component{
    constructor(){
        super();

    }
    
    render(){
        const {isActive, id } = this.props;
        let childrenClass = "nav-store-item-children";
        if(isActive){
            childrenClass += " my-item-active";
        }
        return(
            <div className='nav-store-item-mainframe'>
                <div className={childrenClass}
                    onClick={this.props.onclickItem}>
                    {this.props.storeName}
                </div>
            </div>
            
        );
    }
}

export default NavStoreItem;