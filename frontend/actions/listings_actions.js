import * as APIUtil from '../util/listings_util';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const DELETE_LISTING = "DELETE_LISTING";
export const RECEIVE_LISTING_ERRORS = "RECEIVE_LISTING_ERRORS";

export const receiveListings = payload => ({
    type: RECEIVE_LISTINGS,
    payload
});

export const receiveListing = payload => ({
    type: RECEIVE_LISTING,
    payload
});

export const deleteListing = listingId => ({
    type: DELETE_LISTING,
    listingId
});

export const receiveListingErrors = errors => ({
    type: RECEIVE_LISTING_ERRORS,
    errors
});

export const fetchListings = filters => dispatch => (
    APIUtil.fetchListings(filters).then( listings => dispatch(receiveListings(listings)))
);

export const fetchListing = listingId => dispatch => (
    APIUtil.fetchListing(listingId).then(listing => dispatch(receiveListing(listing)))
);

export const createListing = (listing) => dispatch => (
    APIUtil.createListing(listing).then(payload => dispatch(receiveListing(payload)),
        errors => dispatch(receiveListingErrors(errors.responseJSON)))
);

export const destroyListing = (listingId) => dispatch => {
    dispatch(deleteListing(listingId));
    APIUtil.destroyListing(listingId);
};
