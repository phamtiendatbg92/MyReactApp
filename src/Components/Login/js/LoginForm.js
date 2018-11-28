import React from 'react';
import '../css/LoginForm.css';
import { createObjFromFormData } from 'Utilities/FormUtility';
import { connect } from 'react-redux';
import { setAuthenState } from '../../../Actions/AuthenAction';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const dataJson = createObjFromFormData(data);
        if (dataJson.userName === "datpt" &&
            dataJson.passWord === "abc") {
                localStorage.setItem("myApp_isAuthen","true");
                this.props.setAuthenState(true);
        }
    }
    render() {
        return (
            <form className='loginForm-mainframe'
                onSubmit={this.onSubmit}>
                <input type='text' name="userName" />
                <input type='password' name="passWord" />
                <button>Login</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthen: state.authenReducer.isAuthen,
    };
}
const mapDispatchToProps = {
    setAuthenState,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);