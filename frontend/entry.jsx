import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import merge from 'lodash/merge';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = {
        entities: {
            locations: window.locations
        }
    };
    delete window.locations;
    if (window.currentUser) {
        const userState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        preloadedState = merge(preloadedState, userState);
        delete window.currentUser;
    }
    const store = configureStore(preloadedState);

    window.getState = store.getState;
    window.dispatch = store.dispatch;


    ReactDOM.render(<Root store={ store } />, root);
});