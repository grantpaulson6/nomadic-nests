import React from 'react';

class ListingShow extends React.Component {

    componentDidMount() {
        this.props.fetchListings();
    }

    render() {
        const listingitems = this.props.listings.map(listing => {
            return (
                <ListingsIndexItem
                    key={listing.id}
                    listing={listing}
                />)
        });
        return (
            <div>
                <div className="listing-item-container">
                    {listingitems}
                </div>
            </div>
        )
    }
}

export default ListingShow;