import React from 'react';

class FilterGuests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guests: null
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
            <div id="filter-guests"
                className="filter-modal">
                <form className="search-field"
                    onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="filter-info-guests">
                        <span>GUESTS</span>
                    </label>
                    <input type="number"
                        className="search-info"
                        id="filter-info-guests"
                        onChange={this.handleUpdate("guests").bind(this)}
                        placeholder={this.props.guests}
                    />
                <button>Apply</button>
                </form>
            </div>
        )
    }
}

export default FilterGuests;