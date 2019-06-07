import { REMOVE_FILTERS, UPDATE_FILTERS, UPDATE_FILTER, UPDATE_BOUNDS } from '../actions/filters_actions';
import merge from 'lodash/merge';

const noFilters = {
    location: null,
    guests: null,
    start_date: null,
    end_date: null,
    min_price: null,
    max_price: null,
    nest: null,
    bounds: {
        north: 90,
        east: 180,
        south: -90,
        west: -180
    },
    page: null,
    mapSearch: false,
    allListings: false
};
//live may be unused
const filtersReducer = (state = noFilters, action) => {
    Object.freeze(state);

    switch (action.type) {
        case REMOVE_FILTERS:
            return noFilters;
        case UPDATE_FILTER:
        const newFilter = {
            [action.filter]: action.value
        };
            return merge({}, state, newFilter);
        case UPDATE_FILTERS:
            return merge({}, state, action.filters);
        case UPDATE_BOUNDS:
            return merge({}, state, { bounds: action.bounds });
        default:
            return state;
    }
}

export default filtersReducer;