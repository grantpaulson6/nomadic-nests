import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import { fetchListings } from '../../actions/listings_actions';
import { changeFilter, filterAndFetch } from '../../actions/filters_actions';

//filter on price, way to optimize this?
const frontendFilteredListings = (state) => {
    const listings = [];
    Object.values(state.entities.listings).forEach( listing => {
        if ((state.ui.filters.max_price === null ||
            listing.price <= state.ui.filters.max_price) &&
            (state.ui.filters.min_price === null ||
            listing.price >= state.ui.filters.min_price) &&
            (state.ui.filters.guests === null ||
            listing.max_guests >= state.ui.filters.guests) &&
            (state.ui.filters.nest === null ||
            listing.property_type === state.ui.filters.nest) &&
            listingAvailableForDates(listing.id, state, state.ui.filters.start_date, state.ui.filters.end_date)) {
                listings.push(listing);
            }
    });
    return listings;
};

const bookingsForListing = (listingId, state) => {
    const bookingIds = state.entities.listings[listingId].booking_ids;
    return bookingIds.map( bookingId => state.entities.bookings[bookingId]);
};

const listingAvailableForDates = (listingId, state, start_date, end_date) => {
    if (start_date === null || end_date === null) {
        return true;
    }
    const bookings = bookingsForListing(listingId, state);
    for (let i in bookings) {
        let booking = bookings[i];
        if (booking.end_date > start_date && booking.start_date < end_date) {
            return false;
        } else if (booking.start_date < end_date && booking.end_date > start_date) {
            return false;
        }
    }
    return true;
}


const mapStateToProps = (state, ownProps) => ({
    // listings: frontendFilteredListings(state),
    listings: Object.values(state.entities.listings),
    page: state.ui.filters.page
});

const mapDispatchToProps = (dispatch) => ({
    // fetchListings: filters => dispatch(fetchListings(filters)),
    // updateFilter: filters => dispatch(changeFilter(filters))
    filterAndFetch: (filter, value) => dispatch(filterAndFetch(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);