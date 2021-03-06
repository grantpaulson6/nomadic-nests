import { fetchListings } from './listings_actions';
import merge from 'lodash/merge';

export const REMOVE_FILTERS = "REMOVE_FILTERS";
export const UPDATE_FILTERS = "UPDATE_FILTERS";
export const UPDATE_FILTER = "UPDATE_FILTER";
export const UPDATE_BOUNDS = "UPDATE_BOUNDS";


//live may be unused
export const changeSingleFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

export const changeFilter = filters => ({
    type: UPDATE_FILTERS,
    filters
});

export const receiveBounds = bounds => ({
    type: UPDATE_BOUNDS,
    bounds
});

export const updateBounds = bounds => (dispatch, getState) => {
    dispatch(receiveBounds(bounds));
};

export const updateBoundsAndFetch = bounds => (dispatch, getState) => {
    dispatch(receiveBounds(bounds));
    dispatch(changeSingleFilter('page',0));
    return fetchListings(getState().ui.filters)(dispatch);
};

export const filterAndFetch = (filter, value) => (dispatch, getState) => {
    dispatch(changeSingleFilter(filter, value));
    return fetchListings(getState().ui.filters)(dispatch);
};

export const filtersAndFetch = (filters) => (dispatch, getState) => {
    dispatch(changeSingleFilter('page', 0));
    dispatch(changeSingleFilter('allListings', false));
    dispatch(changeFilter(filters));
    return fetchListings(getState().ui.filters)(dispatch);
};