import { connect } from 'react-redux';  
import Search from './search';
import { changeFilter, filterAndFetch } from '../../actions/filters_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    // const current_location = state.ui.filters.location ? state.entities.locations[state.ui.filters.location].name
    return ({
        locations: Object.values(state.entities.locations).map(location => {
            return { name: location.name + " (" + location.listing_count + ")", id: location.id};
        }),
        location_names: Object.values(state.entities.locations).map(location => location.name),
        // current_location: state.entities.locations[ownProps.location.pathname.split('/').slice(-1)[0]].name
        current_location: state.ui.filters.location ? state.entities.locations[state.ui.filters.location].name : null
});};

const mapDispatchToProps = (dispatch) => ({
    changeFilter: filters => dispatch(changeFilter(filters)),
    filterAndFetch: (filter, value) => dispatch(filterAndFetch(filter, value))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));