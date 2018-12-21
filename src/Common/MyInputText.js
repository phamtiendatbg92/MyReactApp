import React from 'react';
import "./MyInputText.css";
class MyInputText extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.handleChange(event);
    }
    render() {
        return (
            <div className="myInputText-div">
                <label htmlFor={this.props.name}
                    className="myLabel">{this.props.content}</label>
                <input type="text" name={this.props.name}
                    className="myInputText" value={this.props.value}
                    onChange={this.handleChange} />
            </div>
        );
    }
}


export default MyInputText;