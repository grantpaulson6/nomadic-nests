
export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(listings) {
        listings.forEach( listing => {
            if (!this.markers[listing.id]) {
                this.createListingMarker(listing);
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