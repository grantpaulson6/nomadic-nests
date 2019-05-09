import React from 'react';
import ListingsIndexItem from './listings_index_item';
import ListingsMapContainer from './listings_map_container';

class ListingsIndex extends React.Component {

    componentDidMount() {
        // this.props.fetchListings(this.props.filters);
    }

    render() {
        let listingitems = this.props.listings.map(listing => {
        return (
            <ListingsIndexItem 
                key={listing.id} 
                listing={listing}
                />)
        });
        if (listingitems.length === 0) {
            listingitems = <h2 className="no-listings">No Nests with the set filters</h2>
        }
        return (
            <div>
                <div className="listing-item-container map-on grid">
                    {listingitems}
                </div>
                <ListingsMapContainer key={this.props.filters.location} listings={this.props.listings}/>
            </div>
        )
    }
}

export default ListingsIndex;