import React from 'react';

class MyInputText extends React.Component{
    render(){
        return (
            <div>
                <label htmlFor={this.props.name}>{this.props.content}</label>
                <input type="text" id={this.props.id} name={this.props.name}/>
            </div>   
        );
    }
}

export default MyInputText;