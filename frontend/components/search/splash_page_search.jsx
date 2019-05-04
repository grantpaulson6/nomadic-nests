import React from 'react';
import { withRouter } from 'react-router-dom';


class SplashPageSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: "",
            guests: "",
            start_date: "",
            end_date: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.updateFilters(formData);
        this.props.history.push('/search/');
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    matches() {
        debugger;   
        if (!this.props.location_names) {
            return [];
        }
        const matches = [];
        if (this.state.location.length === 0) {
            return this.props.location_names;
        }

        this.props.location_names.forEach(location => {
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

    selectName(e) {
        const location = e.curretTarget.value;
        this.setState({ location });
    }

    render() {

        const locations = this.matches().map((result, i) => (
            <li key={i} onCilck={this.selectName}>{result}</li>
        ))
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
                            />
                        <ul className="search-field-matches">
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
                                id="search-info-where"
                                onChange={this.handleChange("start_date")}
                            />
                        </div>
                        <div className="date-right">
                            <label htmlFor="search-info-enddate">
                                <span>CHECKOUT</span>
                            </label>
                            <input type="DATE"
                                className="search-info"
                                id="search-info-where"
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
    }
}

export default withRouter(SplashPageSearch);