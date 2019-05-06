import React from 'react';

class FilterBar extends React.Component {


    handleReturn(e) {
        e.preventDefault();
        this.props.changeFilter(this.props.listing_location);
        this.props.history.push("/search/");
    }
    render() {
        if (this.props.location.pathname === "/search/") {
            return null;
        } else {
            return (
                <div className="filter-bar">
                    <button onClick={this.handleReturn.bind(this)}>
                        {this.props.listing_location}
                    </button>
                </div>
            )
        }
    }
}


export default FilterBar;