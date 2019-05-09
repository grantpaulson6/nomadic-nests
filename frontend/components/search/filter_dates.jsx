import React from 'react';


class FilterDates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start_date: this.props.start_date,
            end_date: this.props.end_date
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.changeFilter(this.state);
        this.props.closeModal();
    }

    handleUpdate(field) {
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.currentTarget.value });
        };
    }
    render() {
        return (
            <div id="filter-dates"
                className="filter-modal">
                <form className="search-field"
                    onSubmit={this.handleSubmit.bind(this)}>
                    <div className="date-left">
                        <label htmlFor="filter-info-startdate">
                            <span>CHECK-IN</span>
                        </label>
                        <input type="DATE"
                            className="search-info"
                            id="filter-info-startdate"
                            onChange={this.handleUpdate("start_date")}
                            value={this.state.start_date}
                        />
                    </div>
                    <div className="date-right">
                        <label htmlFor="filter-info-enddate">
                            <span>CHECKOUT</span>
                        </label>
                        <input type="DATE"
                            className="search-info"
                            id="filter-info-enddate"
                            onChange={this.handleUpdate("end_date")}
                            value={this.state.end_date}
                        />
                    </div>
                    <button>Apply</button>
                </form>
            </div>
        )
    }
}

export default FilterDates;