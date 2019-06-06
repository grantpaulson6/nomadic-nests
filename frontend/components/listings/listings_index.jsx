import React from 'react';
import ListingsIndexItem from './listings_index_item';
import ListingsMapContainer from './listings_map_container';

class ListingsIndex extends React.Component {
    constructor(props) {

        super(props);
        // if (!props.filterLocation) {
            //     props.updateLocation(props.urlLocation);
            // }
        }
        componentDidMount() {
            // this.id = this.props.match.params.locationId;
        if (!this.props.filterLocation) {
            this.props.updateLocation(this.props.urlLocation);
        }
        this.props.filterAndFetch('page', 0);
    }

    onPaginatedSearch() {
        this.props.filterAndFetch('page', this.props.page + 1);
    }
    render() {
        if (!this.props.listings) return null;
        let listingitems = this.props.listings.map(listing => {
            return (
                <ListingsIndexItem 
                    key={listing.id} 
                    listing={listing}
                    />
                )
            });
        if (listingitems.length === 0) {
            listingitems = <h2 className="no-listings">No Nests with the set filters</h2>
        }
        return (
            <div>
                <div className="listing-item-container map-on grid">
                    {listingitems}
                </div>
                <button onClick={this.onPaginatedSearch.bind(this)}>More Listings</button>
                {/* <ListingsMapContainer key={this.props.filters.location} listings={this.props.listings}/> */}
            </div>
        )
    }
}

export default ListingsIndex;