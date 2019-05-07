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
        if (this.props.listing) {
            return (
                <div className="listing-show">
                    <div className="listing-photos">
                        <div className="photos-1">
                            <img src={this.props.listing.photoUrls[0]} alt="" />
                        </div>
                        <div className="other-photos">
                            <div className="photos">
                                <img src={this.props.listing.photoUrls[1]} alt="" />
                            </div>
                            <div className="photos">
                                <img src={this.props.listing.photoUrls[2]} alt="" />
                            </div>
                            <div className="photos">
                                <img src={this.props.listing.photoUrls[3]} alt="" />
                            </div>
                            <div className="photos">
                                <img src={this.props.listing.photoUrls[4]} alt="" />
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
                                <div id="asdf">stuff</div>
                            </div>
                            <BookingBox price={this.props.listing.price}/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <h1>listing not found</h1>
        }
    }
}

export default ListingShow;