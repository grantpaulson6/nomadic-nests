import React from 'react';
import ToggleSwitch from './toggle_switch';

class FilterBar extends React.Component {


    handleReturn(e) {
        e.preventDefault();
        this.props.changeFilter({ location: this.props.listing_location });
        this.props.history.push("/search/");
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
        if (this.props.location.pathname === "/search/") {
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
                            <button onClick={() => this.props.changeFilter({ guests: null, start_date: null, end_date: null, max_price: null, min_price: null, nest: null })}
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
                            {this.props.listing_location}
                        </button>
                    </div>
                </div>
            )
        }
    }
}


export default FilterBar;