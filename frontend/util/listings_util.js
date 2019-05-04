

export const fetchListings = filters => (
    $.ajax({
        method: "GET",
        url: "api/listings",
        data: { filters }
    })
);

export const fetchListing = listingId => (
    $.ajax({
        method: "GET",
        url: `api/listings/${listingId}`
    })
);

export const createListing = listing => {
    return (
    $.ajax({
        method: "POST",
        url: "api/listings",
        data: listing,
        contentType: false,
        processData: false
    })
)
}
