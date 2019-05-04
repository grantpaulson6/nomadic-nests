import { REMOVE_FILTERS, UPDATE_FILTERS, UPDATE_FILTERS_LIVE } from '../actions/filters_actions';
import merge from 'lodash/merge';

const noFilters = {
    location: null,
    guests: null,
    start_date: null,
    end_date: null
};

const filtersReducer = (state = noFilters, action) => {
    Object.freeze(state);
    switch (action.type) {
        case REMOVE_FILTERS:
            return noFilters;
        case UPDATE_FILTERS_LIVE:
        const newFilter = {
            [action.filter]: action.value
        };
            return merge({}, state, newFilter);
        case UPDATE_FILTERS:
            return merge({}, state, action.filters);
        default:
            return state;
    }
}

export default filtersReducer;