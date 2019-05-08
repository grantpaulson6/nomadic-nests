import { RECEIVE_LISTING } from '../actions/listings_actions';

const newListingReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LISTING:
            return action.payload.listing.id;
        default:
            return state;
    }
};

export default newListingReducer;