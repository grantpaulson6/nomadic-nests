import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import listingErrorsReducer from './listing_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    listing: listingErrorsReducer
});

export default errorsReducer;