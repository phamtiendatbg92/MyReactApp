import LoginForm from './js/LoginForm';
import { setAuthenState, setUserRole } from '../../Actions/AuthenAction';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        isAuthen: state.userReducer.isAuthen,
    };
}
const mapDispatchToProps = {
    setAuthenState,
    setUserRole,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);