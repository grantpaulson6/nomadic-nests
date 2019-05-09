import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listings_actions';
//update listing, need new action


const mapStateToProps = (state, ownProps) => {
    const listing = state.entities.listings[ownProps.match.params.listingId];
    let bookings = [];
    if (listing) {
        bookings = listing.booking_ids.map(booking_id => state.entities.bookings[booking_id]);
    }
    return ({
        listing,
        bookings
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);