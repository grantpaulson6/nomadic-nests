import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const login = user => dispatch => (
    SessionAPIUtil.login(user)
        .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
        errors => dispatch(receiveSessionErrors(errors))
        )
);

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user)
        .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
        errors => dispatch(receiveSessionErrors(errors))
        )
);

export const logout = () => dispatch => (
    SessionAPIUtil.logout()
        .then(currentUser => dispatch(logoutCurrentUser()))
);


