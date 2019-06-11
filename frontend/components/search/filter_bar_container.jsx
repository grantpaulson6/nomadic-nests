import { connect } from 'react-redux';
import FilterBar from './filter_bar';
import { withRouter } from 'react-router-dom';
import { changeFilter, filtersAndFetch } from '../../actions/filters_actions';
import { openModal } from '../../actions/modal_actions';

//hacky, figure out react router dom issue
const mapStateToProps = (state, ownProps) => {
    const path_arr = ownProps.location.pathname.split("/");
    const listingId = path_arr[path_arr.length - 1];
    const listing = state.entities.listings[listingId];
    const listingLocation = listing ? state.entities.locations[listing.location] : {};
    return ({
        listing,
        listingLocation
    });
};
const mapDispatchToProps = (dispatch) => ({
    changeFilter: filters => dispatch(changeFilter(filters)),
    filtersAndFetch: filters => dispatch(filtersAndFetch(filters)),
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilterBar));