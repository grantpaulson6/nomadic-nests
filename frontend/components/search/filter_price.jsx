import React from 'react';


class FilterPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            max_price: null,
            min_price: null
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
            <div id="filter-price"
                className="filter-modal">
                <form className="search-field"
                    onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="filter-info-max-price">
                        <span>Max Price</span>
                    </label>
                    <input type="number"
                        step=".01"
                        className="search-info"
                        id="filter-info-max-price"
                        onChange={this.handleUpdate("max_price")}
                        placeholder={this.props.max_price}
                    />
                    <label htmlFor="filter-info-min-price">
                        <span>Min Price</span>
                    </label>
                    <input type="number"
                        step=".01"
                        className="search-info"
                        id="filter-info-min-price"
                        onChange={this.handleUpdate("min_price")}
                        placeholder={this.props.min_price}
                    />
                    <button>Apply</button>
                </form>
            </div>
        )
    }
}



export default FilterPrice;