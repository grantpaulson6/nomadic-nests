import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listings_actions';
import merge from 'lodash/merge';

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LISTING:
        let newState = merge({}, state);
        if (action.payload.booking != undefined) {
            newState[action.payload.booking.id] = action.payload.booking;
            return newState;
        } else {
            return state;
        }
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