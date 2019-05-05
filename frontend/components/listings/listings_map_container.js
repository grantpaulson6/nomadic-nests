import { connect } from 'react-redux';
import ListingsMap from './listings_map';

const mapStateToProps = (state, ownProps) => {
    return ({
        current_location: state.entities.locations[state.ui.filters.location]
    });
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsMap);