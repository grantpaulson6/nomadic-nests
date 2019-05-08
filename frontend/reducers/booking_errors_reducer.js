import { RECEIVE_BOOKING_ERRORS } from '../actions/bookings_actions';
import { RECEIVE_LISTING } from '../actions/listings_actions';

const bookingErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOKING_ERRORS:
        debugger
            return action.errors;
        case RECEIVE_LISTING:
            return {};
        default:
            return state;
    }
};

export default bookingErrorsReducer;