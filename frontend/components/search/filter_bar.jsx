import React from 'react';
import ToggleSwitch from './toggle_switch';

class FilterBar extends React.Component {


    handleReturn(e) {
        e.preventDefault();
        // this.props.changeFilter({ location: this.props.listingLocation.id });
        this.props.history.push(`/search/${this.props.listingLocation.id}`);
    }

    handleMapToggle(e) {
        e.preventDefault;
        const map = document.getElementById("map-container");
        const list = document.getElementsByClassName("listing-item-container")[0];
        if (e.currentTarget.checked === true) {
            map.className =("listing-map map-on");
            list.className = ("listing-item-container map-on grid");
        } else {
            map.className += (" map-off");
            list.className += (" map-off");
        }
    }

    
    render() {
        if (this.props.location.pathname.match(/search/)) {
            return (
                <div className="filler-nav2">
                    <div className="filter-bar fixed">
                        <div className="left-filter">
                            <button onClick={() => this.props.openModal("filter dates")}>
                                Dates
                            </button>
                            <button onClick={() => this.props.openModal("filter guests")}>
                                Guests
                            </button>
                            <button onClick={() => this.props.openModal("filter nest")}>
                                Nest Type
                            </button>
                            <button onClick={() => this.props.openModal("filter price")}>
                                Price
                            </button>
                            <button onClick={() => this.props.filtersAndFetch({ guests: null, start_date: null, end_date: null, max_price: null, min_price: null, property_type: null, allListings: false })}
                                className="clear-filters">
                                Clear
                            </button>
                        </div>
                        <div className="right-filter">
                            <span>Show Map</span>
                            <ToggleSwitch handleMapToggle={this.handleMapToggle.bind(this)}/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="filler-nav2">
                    <div className="filter-bar">
                        <button onClick={this.handleReturn.bind(this)}>
                            {this.props.listingLocation.name}
                        </button>
                    </div>
                </div>
            )
        }
    }
}


export default FilterBar;