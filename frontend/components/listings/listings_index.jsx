import React from 'react';

class ListingsIndex extends React.Component {

    componentDidMount() {
        this.props.fetchListings();
    }

    render() {
        const listingitems = this.props.listings.map( listing => <li key={listing.id}>{listing.title}</li>)
        return (
            <div>
                <ul>
                    {listingitems}
                </ul>
            </div>
        )
    }
}

export default ListingsIndex;