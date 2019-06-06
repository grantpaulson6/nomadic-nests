import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: null,
            locationName: "",
            guests: "",
            start_date: "",
            end_date: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.hideMatches = this.hideMatches.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let locationId = this.props.locations.map( location => {
            if (this.state.locationName.split(" ")[0] === location.name.split(" ")[0]) {
                return location.id;
            }
            return null;
        }).filter(el => el);
        this.setState({location: locationId[0]}, ()=>{
            this.props.changeFilter(this.state);
            this.props.history.push(`/search/${this.state.location}`);
            this.props.filterAndFetch('page', 0);
        });
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value }, this.sortList);
        };
    }

    matches() {
        if (!this.props.locations) {
            return [];
        }
        const matches = [];
        if (this.state.locationName.length === 0) {
            return this.props.locations;
        }

        this.props.locations.forEach(location => {
            const sub = location.name.slice(0, this.state.locationName.length);
            if (sub.toLowerCase() === this.state.locationName.toLowerCase()) {
                matches.push(location);
            }
        });

        if (matches.length === 0) {
            matches.push('No matches');
        }
        return matches;
    }

    showMatches(e) {
        e.preventDefault();
        const matches = document.getElementById("search-field-matches");
        matches.className = "display-on";
        this.sortList();
        document.getElementById("search-info-where").addEventListener("mousedown", e => e.stopPropagation(), true);
        document.getElementsByTagName("body")[0].addEventListener("mousedown", this.hideMatches, false);
    }
    
    hideMatches(e) {
        e.preventDefault();
        document.getElementsByTagName("body")[0].removeEventListener("mousedown", this.hideMatches, false);
        const matches = document.getElementById("search-field-matches");
        matches.classList.remove("display-on");
    }

    selectName(e) {
        e.preventDefault();

        let location = e.currentTarget.getAttribute('locationid');
        let locationName = e.currentTarget.innerHTML;
        locationName = locationName.split(" ");
        locationName = locationName.slice(0, locationName.length - 1).join(" ");
        if (locationName != "No") {
            this.setState({ locationName, location }, () => {
                if (this.props.location.pathname != "/") {
                    this.props.changeFilter(this.state);
                    this.props.history.push(`/search/${location}`);
                    this.props.filterAndFetch('page', 0);
                    this.setState({locationName: ""});
                }
            });
        }
    }

    sortList() {
        const matches = document.getElementById("search-field-matches");
        Array.from(matches.getElementsByTagName("li"))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => matches.appendChild(li));
    }

    render() {

        const locations = this.matches().map((location,i) => (
            <li key={i} locationid={location.id} onMouseDown={this.selectName.bind(this)}>{location.name}</li>
        ))

        const nav_search_box = (
            <div className="nav-search-box">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="nav-search-field">
                        <input type="text"
                            className="search-info"
                            id="search-info-where"
                            value={this.state.locationName}
                            onChange={this.handleChange("locationName")}
                            onFocus={this.showMatches.bind(this)}
                            onClick={this.showMatches.bind(this)}
                            pattern={this.props.location_names.join("|")}
                            placeholder={this.props.current_location}
                            title="Only the listed regions are searcheable"
                            required
                        />
                        <ul id="search-field-matches">
                            {locations}
                        </ul>
                    </div>
                </form>
            </div>
        )
        if (this.props.location.pathname === "/") {
            return (
                <div className="search-box">
                    <h1>Discover the nests of two nomads</h1>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="search-field">
                            <label htmlFor="search-info-where">
                                <span>WHERE</span>
                            </label>
                                <input type="text"
                                className="search-info"
                                id="search-info-where"
                                value={this.state.locationName}
                                onChange={this.handleChange("locationName")}
                                onFocus={this.showMatches.bind(this)}
                                onClick={this.showMatches.bind(this)}
                                pattern={this.props.location_names.join("|")}
                                title="Only the listed regions are searcheable"
                                />
                            <ul id="search-field-matches">
                                { locations }
                            </ul>
                        </div>
                        <div className="search-field date">
                            <div className="date-left">
                                <label htmlFor="search-info-startdate">
                                    <span>CHECK-IN</span>
                                </label>
                                <input type="DATE"
                                    className="search-info"
                                    id="search-info-startdate"
                                    onChange={this.handleChange("start_date")}
                                />
                            </div>
                            <div className="date-right">
                                <label htmlFor="search-info-enddate">
                                    <span>CHECKOUT</span>
                                </label>
                                <input type="DATE"
                                    className="search-info"
                                    id="search-info-enddate"
                                    onChange={this.handleChange("end_date")}
                                />
                            </div>
                        </div>
                        <div className="search-field">
                            <label htmlFor="search-info-guests">
                                <span>GUESTS</span>
                            </label>
                            <input type="number"
                                className="search-info"
                                id="search-info-guests"
                                onChange={this.handleChange("guests")}
                            />
                        </div>
                        <button className="search-button">Search</button>
                    </form>
                </div>
            )
        } else {
            return nav_search_box;
        }
    }
}

export default withRouter(Search);