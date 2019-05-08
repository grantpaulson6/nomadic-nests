import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import { fetchListings } from '../../actions/listings_actions';

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
            listing.property_type === state.ui.filters.nest)) {
                listings.push(listing);
            }
    });
    return listings;
};


const mapStateToProps = (state, ownProps) => ({
    listings: frontendFilteredListings(state),
    filters: state.ui.filters
});

const mapDispatchToProps = (dispatch) => ({
    fetchListings: filters => dispatch(fetchListings(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);