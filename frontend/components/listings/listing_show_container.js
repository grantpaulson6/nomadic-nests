import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { fetchListing } from '../../actions/listings_actions';
//update listing, need new action


const mapStateToProps = (state, ownProps) => {
    const listing = state.entities.listings[ownProps.match.params.listingId];
    let location;
    if (listing) {
        location = state.entities.locations[listing.location_id];
    }
    return ({
        listing,
        location
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchListing: (listingId) => dispatch(fetchListing(listingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);