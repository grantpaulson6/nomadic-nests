import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const MapStateToProps = state => ({
    loggedIn: Boolean(state.session.id)
});
//notable issue cycling between two in infinite loop
const Auth = ({ component: Component, path, loggedIn }) => {
    return (
        <Route
            path={path}
            render={props => (
                loggedIn ? <Redirect to="/" /> : <Component {...props} />
            )}
        />
    )
}

const Protected = ({ component: Component, path, loggedIn }) => {
    return (
        <Route
            path={path}
            render={props => (
                !loggedIn ? <Redirect to="/signup" /> : <Component {...props} />
            )}
        />
    )
}

export const AuthRoute = withRouter(connect(MapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(MapStateToProps)(Protected));