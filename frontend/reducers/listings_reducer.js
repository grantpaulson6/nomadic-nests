import { RECEIVE_LISTING, RECEIVE_LISTINGS } from '../actions/listings_actions';
import merge from 'lodash/merge';

const listingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LISTING:
            let newState = merge({}, state);
            newState[action.payload.listing.id] = action.payload.listing;
            return newState;
        case RECEIVE_LISTINGS:
            if (action.payload.listings) {
                return action.payload.listings;
            } else {
                return {};
            }
        default:
            return state;
    }
};

export default listingsReducer;