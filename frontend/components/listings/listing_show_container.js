import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listings_actions';
//update listing, need new action


const mapStateToProps = (state, ownProps) => ({
    listing: state.entities.listings[ownProps.match.params.listingId]
});

const mapDispatchToProps = (dispatch) => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);