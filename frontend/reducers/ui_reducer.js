import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import filtersReducer from './filters_reducer';
import newListingReducer from './new_listing_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    filters: filtersReducer,
    new_listing: newListingReducer
});

export default uiReducer;