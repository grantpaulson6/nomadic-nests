import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, demoLogin } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
    login: user => dispatch(login(user)),
    openSignup: () => dispatch(openModal("signup")),
    closeModal: () => dispatch(closeModal()),
    demoLogin: () => dispatch(demoLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);