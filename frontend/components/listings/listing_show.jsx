import React from 'react';

class ListingShow extends React.Component {

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId);
    }

    componentDidUpdate() {
        if (!this.props.listing || this.props.listing.photoUrls.length <= 1) {
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
                                <div className="details">{this.props.location.name}</div>
                                <div className="details">{this.props.listing.property_type}</div>
                                <ul className="details nums">
                                    <li className="nums-li">{this.props.listing.max_guests} guests</li>
                                    <li className="nums-li">{this.props.listing.num_beds} beds</li>
                                    <li className="nums-li">{this.props.listing.num_bathrooms} baths</li>
                                </ul>
                                <div className="details">
                                    <p>{this.props.listing.description}</p>
                                </div>
                            </div>
                            <div className="booking-box">
                                <div className="price">${this.props.listing.price}
                                    <span className="span"> per night</span>
                                </div>

                                
                                <div className="booking-field date">
                                    <div className="date-left">
                                        <label htmlFor="booking-info-startdate">
                                            <span>CHECK-IN</span>
                                        </label>
                                        <input type="DATE"
                                            className="booking-info"
                                            id="booking-info-where"
                                        />
                                    </div>
                                    <div className="date-right">
                                        <label htmlFor="booking-info-enddate">
                                            <span>CHECKOUT</span>
                                        </label>
                                        <input type="DATE"
                                            className="booking-info"
                                            id="booking-info-where"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="booking-field">
                                    <label htmlFor="booking-info-guests">
                                        <span>GUESTS</span>
                                    </label>
                                    <input type="number"
                                        className="booking-info"
                                        id="booking-info-guests"
                                    />
                                </div>
                                <button className="booking-button">Book</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <h1>rendering</h1>
        }
    }
}

export default ListingShow;