import { connect } from 'react-redux';  
import SplashPageSearch from './splash_page_search';
import { changeFilter } from '../../actions/filters_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        locations: Object.values(state.entities.locations).map(location => {
            return location.name + " (" + location.listing_count + ")";
        }),
        location_names: Object.values(state.entities.locations).map(location => location.name)
});};

const mapDispatchToProps = (dispatch) => ({
    changeFilter: filters => dispatch(changeFilter(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashPageSearch);