import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, demoLogin } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
    signup: user => dispatch(signup(user)),
    openLogin: () => dispatch(openModal("login")),
    closeModal: () => dispatch(closeModal()),
    demoLogin: () => dispatch(demoLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);