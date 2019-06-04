import { connect } from 'react-redux';  
import Search from './search';
import { changeFilter } from '../../actions/filters_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return ({
        locations: Object.values(state.entities.locations).map(location => {
            return { name: location.name + " (" + location.listing_count + ")", id: location.id};
        }),
        location_names: Object.values(state.entities.locations).map(location => location.name),
        current_location: state.entities.locations[ownProps.location.pathname.split('/').slice(-1)[0]].name
});};

const mapDispatchToProps = (dispatch) => ({
    changeFilter: filters => dispatch(changeFilter(filters))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));