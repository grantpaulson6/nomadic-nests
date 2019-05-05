
export const REMOVE_FILTERS = "REMOVE_FILTERS";
export const UPDATE_FILTERS = "UPDATE_FILTERS";
export const UPDATE_FILTERS_LIVE = "UPDATE_FILTERS_LIVE";
export const UPDATE_BOUNDS = "UPDATE_BOUNDS"

//live may be unused
export const changeFilterLive = (filter, value) => ({
    type: UPDATE_FILTERS_LIVE,
    filter,
    value
});

export const changeFilter = filters => ({
    type: UPDATE_FILTERS,
    filters
});

export const updateBounds = bounds => ({
    type: UPDATE_BOUNDS,
    bounds
});
