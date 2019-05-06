import { connect } from 'react-redux';  
import Search from './search';
import { changeFilter } from '../../actions/filters_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        locations: Object.values(state.entities.locations).map(location => {
            return location.name + " (" + location.listing_count + ")";
        }),
        location_names: Object.values(state.entities.locations).map(location => location.name),
        current_location: state.ui.filters.location
});};

const mapDispatchToProps = (dispatch) => ({
    changeFilter: filters => dispatch(changeFilter(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);