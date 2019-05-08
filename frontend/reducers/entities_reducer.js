import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import listingsReducer from './listings_reducer';
import bookingsReducer from './bookings_reducer';

const locationsReducer = (state=[]) => state;

const entitiesReducer = combineReducers({
    users: usersReducer,
    listings: listingsReducer,
    locations: locationsReducer,
    bookings: bookingsReducer
});

export default entitiesReducer;