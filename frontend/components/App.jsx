import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar_container';
import Modal from './auth/modal_container';
import SplashPage from './splash_page';
import ListingsIndexContainer from './listings/listings_index_container';
import ListingShowContainer from './listings/listing_show_container';
import Footer from './auth/footer';

//update navbar to use withRouter, no need for switch statement
//use withRouter and props.path to drop className in top level div for formatting with padding
const App = () => (
    <div>
        <Modal />
        <NavBarContainer />
        <Switch>
            <Route exact path="/" component={SplashPage} />
            <Route path="/search/:locationId" render={props => <ListingsIndexContainer id={props.match.params.locationId}/>} />
            <Route path="/listings/:listingId" component={ListingShowContainer} />
        </Switch>
    </div>
);

export default App;