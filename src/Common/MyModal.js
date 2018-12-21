import React from 'react';
import "./MyModal.css";
class MyModal extends React.Component {

    componentDidMount() {
        this.overLayDOM = document.querySelector('.Overlay');
    }

    render() {
        const { isOpen } = this.props;
        if (this.overLayDOM != null) {
            if (!isOpen) {
                this.overLayDOM.style.display = 'none';
            } else {
                this.overLayDOM.style.display = 'block';
            }
        }

        return (
            <div className="Overlay">
                <div className="Modal">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default MyModal;