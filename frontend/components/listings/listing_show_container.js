import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing, destroyListing } from '../../actions/listings_actions';
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
        location: listing ? state.entities.locations[listing.location].name : null,
        owner: listing ? state.session.id === listing.owner_id : false
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId)),
    destroyListing: listingId => dispatch(destroyListing(listingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);