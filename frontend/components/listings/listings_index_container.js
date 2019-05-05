import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import { fetchListings } from '../../actions/listings_actions';

const mapStateToProps = (state, ownProps) => ({
    listings: Object.values(state.entities.listings),
    filters: state.ui.filters
});

const mapDispatchToProps = (dispatch) => ({
    fetchListings: filters => dispatch(fetchListings(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);