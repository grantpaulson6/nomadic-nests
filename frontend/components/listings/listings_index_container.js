import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import { fetchListing, fetchListings, createListing } from '../../actions/listings_actions';

const mapStateToProps = (state, ownProps) => ({
    listings: Object.values(state.entities.listings)
});

const mapDispatchToProps = (dispatch) => ({
    fetchListings: () => dispatch(fetchListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);