
export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(listings) {
        const listingsObject = {};

        listings.forEach( listing => {
            listingsObject[listing.id] = true;
            if (!this.markers[listing.id]) {
                this.createListingMarker(listing);
            }
        });
        Object.keys(this.markers).forEach( marker_id => {
            if (!listingsObject[marker_id]) {
                this.markers[marker_id].setMap(null);
                delete this.markers[marker_id];
            }
        });
    }

    
    createListingMarker(listing) {
        const marker = new google.maps.Marker({
            position: { lat: listing.lat, lng: listing.lng},
            map: this.map,
            title: listing.title
        });
        this.markers[listing.id] = marker;
    }
}