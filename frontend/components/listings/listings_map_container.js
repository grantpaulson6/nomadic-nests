import { connect } from 'react-redux';
import ListingsMap from './listings_map';
import { updateBounds, updateBoundsAndFetch, changeSingleFilter } from '../../actions/filters_actions';

const mapStateToProps = (state, ownProps) => {
    // let current_location;
    // if (ownProps.current_location) {
    //     current_location = ownProps.current_location;
    // } else {
    //     current_location = state.entities.locations[state.ui.filters.location];
    // }
    return ({
        current_location: typeof ownProps.current_location === "string" ?
            state.entities.locations[ownProps.current_location] :
            ownProps.current_location,
        listings: ownProps.listings,
        mapSearch: state.ui.filters.mapSearch
    });
};

const mapDispatchToProps = (dispatch) => ({
    updateBounds: bounds => dispatch(updateBounds(bounds)),
    updateBoundsAndFetch: bounds => {
        dispatch(changeSingleFilter('allListings', false));
        return dispatch(updateBoundsAndFetch(bounds));
    },
    toggleMapSearch: value => {
        dispatch(changeSingleFilter('allListings', false));
        return dispatch(changeSingleFilter('mapSearch', value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsMap);