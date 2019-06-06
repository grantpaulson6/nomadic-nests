import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listings_actions';
//update listing, need new action


const mapStateToProps = (state, ownProps) => {
    const listing = state.entities.listings[ownProps.match.params.listingId];
    let bookings = [];
    if (listing && state.session.id) {
        bookings = listing.booking_ids.map(booking_id => {
            let booking = state.entities.bookings[booking_id];
            if (booking.nomad_id === state.session.id) {
                return booking;
            }
        });
        bookings = bookings.filter( booking => booking );
    }

    return ({
        listing,
        bookings,
        location: listing ? state.entities.locations[listing.location].name : null
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);