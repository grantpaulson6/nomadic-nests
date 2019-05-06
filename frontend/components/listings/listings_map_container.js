import { connect } from 'react-redux';
import ListingsMap from './listings_map';
import { updateBounds } from '../../actions/filters_actions';

const mapStateToProps = (state, ownProps) => {
    let current_location;
    if (ownProps.current_location) {
        current_location = ownProps.current_location;
    } else {
        current_location = state.entities.locations[state.ui.filters.location];
    }
    return ({
        current_location,
        listings: ownProps.listings
    });
};

const mapDispatchToProps = (dispatch) => ({
    updateBounds: bounds => dispatch(updateBounds(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsMap);