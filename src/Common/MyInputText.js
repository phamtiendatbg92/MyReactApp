import React from 'react';

class MyInputText extends React.Component{
    render(){
        return (
            <input type="text" id={this.props.id} name={this.props.name}/>
        );
    }
}

export default MyInputText;