import React from 'react';

class FilterBar extends React.Component {





    render() {

        if (this.props.location.pathname === "/search/") {
            return null
        } else {
            return (
                <div className="filter-bar">
                    <button>Return to {this.props.filter_location}</button>
                </div>
            )
        }
    }
}





export default FilterBar;