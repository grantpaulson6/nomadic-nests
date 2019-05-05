import React from 'react';
import ListingsIndexItem from './listings_index_item';
import ListingsMapContainer from './listings_map_container';

class ListingsIndex extends React.Component {

    componentDidMount() {
        this.props.fetchListings(this.props.filters);
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
                <div className="listing-item-container map-on">
                    {listingitems}
                </div>
                <ListingsMapContainer listings={this.props.listings}/>
            </div>
        )
    }
}

export default ListingsIndex;