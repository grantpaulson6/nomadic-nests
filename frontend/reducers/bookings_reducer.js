import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listings_actions';
import merge from 'lodash/merge';

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LISTING:
            let newState = merge({}, state);
            // newState[action.listing.id] = action.listing;
            // return newState;
        case RECEIVE_LISTINGS:
            return action.payload.bookings;
        default:
            return state;
    }
};

export default bookingsReducer;