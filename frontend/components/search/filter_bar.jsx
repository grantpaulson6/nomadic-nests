import React from 'react';

class FilterBar extends React.Component {


    handleReturn(e) {
        e.preventDefault();
        this.props.changeFilter(this.props.listing_location);
        this.props.history.push("/search/");
    }

    handleMapToggle(e) {
        e.preventDefault;
        const map = document.getElementById("map-container");
        if (e.currentTarget.checked === true) {
            map.className =("listing-map map-on");
        } else {
            map.className += (" map-off");
        }
    }
    
    render() {
        // https://proto.io/freebies/onoff/ for toggle switch
        if (this.props.location.pathname === "/search/") {
            return (
                <div className="filler-nav2">
                    <div className="filter-bar fixed">
                        <div className="onoffswitch">
                            <input type="checkbox"
                                name="onoffswitch"
                                className="onoffswitch-checkbox"
                                id="myonoffswitch"
                                onChange={this.handleMapToggle.bind(this)}
                                defaultChecked/>
                                <label className="onoffswitch-label" htmlFor="myonoffswitch">
                                    <span className="onoffswitch-inner"></span>
                                    <span className="onoffswitch-switch"></span>
                                </label>
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