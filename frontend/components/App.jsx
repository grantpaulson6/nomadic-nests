import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar_container';
import Modal from './auth/modal_container';
import SplashPage from './splash_page';
import ListingsIndexContainer from './listings/listings_index_container';
import ListingShowContainer from './listings/listing_show_container';

//update navbar to use withRouter, no need for switch statement
//use withRouter and props.path to drop className in top level div for formatting with padding
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
        <Route path="/search/" component={ListingsIndexContainer} />
        <Route path="/listings/:listingId" component={ListingShowContainer} />
    </div>
);

export default App;