import React from 'react';
import { withRouter } from 'react-router-dom';


class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: "",
            guests: "",
            start_date: "",
            end_date: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.hideMatches = this.hideMatches.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.changeFilter(this.state);
        this.props.history.push('/search/');
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
        if (this.state.location.length === 0) {
            return this.props.locations;
        }

        this.props.locations.forEach(location => {
            const sub = location.slice(0, this.state.location.length);
            if (sub.toLowerCase() === this.state.location.toLowerCase()) {
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
        matches.className += " display-on";
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
        let location = e.currentTarget.innerHTML;
        location = location.split(" ");
        location = location.slice(0, location.length - 1).join(" ");
        this.setState({ location }, () => {
            const input = document.getElementById("search-info-where");
            input.value = this.state.location;
            if (this.props.location.pathname != "/") {
                this.props.changeFilter(this.state);
                this.props.history.push('/search/');
            }
        });
    }

    sortList() {
        const matches = document.getElementById("search-field-matches");
        Array.from(matches.getElementsByTagName("li"))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => matches.appendChild(li));
    }

    render() {

        const locations = this.matches().map((result, i) => (
            <li key={i} onMouseDown={this.selectName.bind(this)}>{result}</li>
        ))

        const nav_search_box = (
            <div className="nav-search-box">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="nav-search-field">
                        <input type="text"
                            className="search-info"
                            id="search-info-where"
                            onChange={this.handleChange("location")}
                            onFocus={this.showMatches.bind(this)}
                            pattern={this.props.location_names.join("|")}
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
                                onChange={this.handleChange("location")}
                                onFocus={this.showMatches.bind(this)}
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