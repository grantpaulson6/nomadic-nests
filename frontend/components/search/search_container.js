import { connect } from 'react-redux';
import SplashPageSearch from './splash_page_search';

const mapStateToProps = (state, ownProps) => ({
    locations: Object.values(state.entities.locations),
    location_names: Object.values(state.entities.locations).map( location => location.name )
});

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashPageSearch);