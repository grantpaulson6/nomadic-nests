import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar_container';
import Modal from './auth/modal_container';
import SplashPage from './splash_page';
import ListingsIndexContainer from './listings/listings_index_container';
import ListingsFormContainer from './listings/listings_form_container';

const App = () => (
    <div>
        <Modal />
        <Switch>
            <Route exact path="/" 
                render={props => <NavBarContainer navType="splash" {...props} />}
            />
            <Route path="/"
                render={props => <NavBarContainer navType="main" {...props} />}
            />
        </Switch>
        <Route exact path="/" component={SplashPage} />
        <ListingsIndexContainer />
    </div>
);

export default App;