import React from 'react';


class FilterNest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            property_type: null
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
            <div id="filter-nest"
                className="filter-modal">
                <form className="search-field"
                    onSubmit={this.handleSubmit.bind(this)}>
                    <select onChange={this.handleUpdate("nest").bind(this)}
                        className="listings-info"
                        id="filter-nest">
                        <option disabled selected>Type of Nest</option>
                        <option value="campground">Campground</option>
                        <option value="dispersed camping">Dispersed Camping</option>
                        <option value="guest friends/family">Guest of friends/family</option>
                        <option value="cabin">Cabin</option>
                    </select>
                    <button>Apply</button>
                </form>
            </div>
        )
    }
}



export default FilterNest;