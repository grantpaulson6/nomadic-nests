import { RECEIVE_LISTING_ERRORS, RECEIVE_LISTING } from '../actions/listings_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';

const listingErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LISTING_ERRORS:
            return action.errors;
        case RECEIVE_LISTING:
            return {};
        case CLOSE_MODAL:
            return {};
        default:
            return state;
    }
};

export default listingErrorsReducer;