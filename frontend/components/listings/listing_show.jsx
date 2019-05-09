import React from 'react';
import ListingsMapContainer from './listings_map_container';
import BookingBox from './booking_box';

class ListingShow extends React.Component {

    componentDidMount() {
        if (!this.props.listing) {
            this.props.fetchListing(this.props.match.params.listingId);
        }
    }

    componentDidUpdate() {
        if (!this.props.listing) {
            this.props.fetchListing(this.props.match.params.listingId);
        }
    }

    render() {
        let currentDate = new Date();
        currentDate = currentDate.toLocaleDateString("sv-SE");

        let pastBookings = this.props.bookings
            .filter(booking => currentDate.localeCompare(booking.end_date) === 1)
            .map((booking, i) => booking.start_date + " to " + booking.end_date)
            .sort((a, b) => a.localeCompare(b))
            .map((booking, i) => <li key={i}>{booking}</li>);
        let currentBookings = this.props.bookings
            .filter(booking => currentDate.localeCompare(booking.start_date) >= 0 && currentDate.localeCompare(booking.end_date) <= 0)
            .map((booking, i) => booking.start_date + " to " + booking.end_date)
            .sort((a, b) => a.localeCompare(b))
            .map((booking, i) => <li key={i}>{booking}</li>);
        let futureBookings = this.props.bookings
            .filter(booking => currentDate.localeCompare(booking.start_date) === -1)
            .map((booking, i) => booking.start_date + " to " + booking.end_date)
            .sort((a, b) => a.localeCompare(b))
            .map((booking, i) => <li key={i}>{booking}</li>);

        if (this.props.listing) {
            return (
                <div className="listing-show">
                    <div className="listing-photos">
                        <div className="photos-1">
                            <img src={this.props.listing.photoUrls[0]} alt="" />
                        </div>
                        <div className="other-photos">
                            <div className="photos">
                                <img src={this.props.listing.photoUrls[1] ? this.props.listing.photoUrls[1] : this.props.listing.photoUrls[0]} alt="" />
                            </div>
                            <div className="photos">
                                <img src={this.props.listing.photoUrls[2] ? this.props.listing.photoUrls[2] : this.props.listing.photoUrls[0]} alt="" />
                            </div>
                            <div className="photos">
                                <img src={this.props.listing.photoUrls[3] ? this.props.listing.photoUrls[3] : this.props.listing.photoUrls[0]} alt="" />
                            </div>
                            <div className="photos">
                                <img src={this.props.listing.photoUrls[4] ? this.props.listing.photoUrls[4] : this.props.listing.photoUrls[0]} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="listing-body">
                        <div className="listing-details">
                            <h1>{this.props.listing.title}</h1>
                            <div className="details">{this.props.listing.location}</div>
                            <div className="details">{this.props.listing.property_type}</div>
                            <ul className="details nums">
                                <li className="nums-li">{this.props.listing.max_guests} guests</li>
                                <li className="nums-li">{this.props.listing.num_beds} beds</li>
                                <li className="nums-li">{this.props.listing.num_bathrooms} baths</li>
                            </ul>
                            <div className="details">
                                <p>{this.props.listing.description}</p>
                            </div>
                            <ListingsMapContainer className="show-map" 
                                key={this.props.listing.location}
                                listings={[this.props.listing]}
                                current_location={{lat: this.props.listing.lat,
                                    lng: this.props.listing.lng,
                                    zoom: 10}}/>
                            <div className="bookings-details">
                                <h2>{ pastBookings.length != 0 ? "Your Past Bookings for this nest:" : null}</h2>
                                <ul className="past-bookings">
                                    { pastBookings }
                                </ul>
                                <h2>{currentBookings.length != 0 ? "Your Current Bookings for this nest:" : null}</h2>
                                <ul className="past-bookings">
                                    { currentBookings }
                                </ul>
                                <h2>{futureBookings.length != 0 ? "Your Future Bookings for this nest:" : null}</h2>
                                <ul className="past-bookings">
                                    { futureBookings }
                                </ul>
                            </div>
                        </div>
                        <BookingBox price={this.props.listing.price}
                            listingId={this.props.listing.id}/>
                    </div>
                </div>
            )
        } else {
            return <h1>listing not found</h1>
        }
    }
}

export default ListingShow;