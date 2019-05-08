import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listings_actions';
import merge from 'lodash/merge';

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        // case RECEIVE_LISTING:
        //     let newState = merge({}, state);
        //     newState[action.payload.listing.id] = action.payload.listing;
        //     return newState;
        case RECEIVE_LISTINGS:
        if (action.payload.bookings) {
            return action.payload.bookings;
        } else {
            return state;
        }
        default:
            return state;
    }
};

export default bookingsReducer;