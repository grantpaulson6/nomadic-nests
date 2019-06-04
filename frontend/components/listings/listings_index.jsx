import React from 'react';
import ListingsIndexItem from './listings_index_item';
import ListingsMapContainer from './listings_map_container';

class ListingsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0
        };
    }
    componentDidMount() {
        this.props.filterAndFetch(this.props.filters);
    }

    onPaginatedSearch() {
        this.setState({page: this.state.page + 1})
            .then( () => {
                this.props.filterAndFetch(this.props.filters)
            })
    }
    render() {
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
                <button></button>
                <ListingsMapContainer key={this.props.filters.location} listings={this.props.listings}/>
            </div>
        )
    }
}

export default ListingsIndex;