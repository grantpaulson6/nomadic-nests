import React from 'react';
import ListingsIndexItem from './listings_index_item';
import ListingsMapContainer from './listings_map_container';

class ListingsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
        this.state = {
            allListings: false
        }
    }
    componentDidMount() {
        if (this.props.location != this.props.reduxLocation) {
            this.props.updateLocation(this.props.location);
            this.props.filterAndFetch('page', 0)
                .then( (e) => {
                    if (e.payload.count[0] < e.payload.count[1]) {
                        this.setState({allListings: true});
                    }
                });
        }
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll() {
        // if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && this.props.listings.length) {
            if (!this.state.allListings && (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight -5)) {
                this.props.filterAndFetch('page', this.props.page + 1)
                    .then((e) => {
                        if (e.payload.count[0] < e.payload.count[1]) {
                            this.setState({ allListings: true });
                        }
                    });
        }
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
                {/* <button onClick={this.onPaginatedSearch.bind(this)}>More Listings</button> */}
                {/* <ListingsMapContainer key={this.props.location} listings={this.props.listings}/> */}
            </div>
        )
    }
}

export default ListingsIndex;