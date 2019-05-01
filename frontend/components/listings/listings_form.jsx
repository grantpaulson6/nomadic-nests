import React from 'react';

class ListingsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            price: "",
            location: "",
            description: "A little bit about your place",
            property_type: "",
            max_guests: "",
            num_beds: "",
            num_bathrooms: "",
            address: "",
            lat: "",
            lng: "",
            photos: []
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        for ( let key in this.state) {
            if (key === "photos") {
                debugger
                this.state[key].forEach( photo => {
                    formData.append(`listing[photos][]`, photo);
                });
            } else {
                formData.append(`listing[${key}]`, this.state[key]);
            }
        }
        this.props.createListing(formData);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleFile(e) {
        const addedFiles = this.state.photos.concat(e.currentTarget.files[e.currentTarget.files.length - 1]);
        this.setState({ photos: addedFiles});
        // debugger;
        // this.setState({ photos: e.currentTarget.files[0] });
    }

    render() {
        // const errors = this.props.errors.map((error, i) => <li key={i}>{error}</li>)
        return (
            <div className="create-listings">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text"
                        value={this.state.title}
                        onChange={this.handleChange("title").bind(this)}
                        placeholder="Title"
                        className="listings-info"
                    />
                    <input type="number"
                        step="0.01"
                        value={this.state.price}
                        onChange={this.handleChange("price").bind(this)}
                        placeholder="Price"
                        className="listings-info"
                    />
                    <select onChange={this.handleChange("location").bind(this)}
                        className="listings-info">
                        <option disabled selected>Region of your Nest</option>
                        <option value="Alaska">Alaska</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value="Great Lakes">Great Lakes</option>
                        <option value="Northern Plains">Northern Plains</option>
                        <option value="New England">New England</option>
                        <option value="Mid Atlantic">Mid Atlantic</option>
                        <option value="Mississipi Drainage">Mississipi Drainage</option>
                        <option value="Florida">Florida</option>
                        <option value="Southwest">Southwest</option>
                        <option value="Southern Utah">Southern Utah</option>
                        <option value="Colorado">Colorado</option>
                        <option value="California">California</option>
                        <option value="Northwest">Northwest</option>
                    </select>
                    <textarea onChange={this.handleChange("description").bind(this)}
                        value={this.state.description}
                        className="listings-info">
                    </textarea>
                    <select onChange={this.handleChange("property_type").bind(this)}
                        className="listings-info">
                        <option disabled selected>Type of Nest</option>
                        <option value="campground">Campground</option>
                        <option value="dispersed camping">Dispersed Camping</option>
                        <option value="guest friends/family">Guest of friends/family</option>
                        <option value="cabin">Cabin</option>
                    </select>
                    <input type="number"
                        value={this.state.max_guests}
                        onChange={this.handleChange("max_guests").bind(this)}
                        placeholder="Max Guests"
                        className="listings-info"
                    />
                    <input type="number"
                        value={this.state.num_beds}
                        onChange={this.handleChange("num_beds").bind(this)}
                        placeholder="Number of beds"
                        className="listings-info"
                    />
                    <input type="number"
                        value={this.state.num_bathrooms}
                        onChange={this.handleChange("num_bathrooms").bind(this)}
                        placeholder="Number of bathrooms"
                        className="listings-info"
                    />
                    <input type="text"
                        value={this.state.address}
                        onChange={this.handleChange("address").bind(this)}
                        placeholder="Address"
                        className="listings-info"
                    />
                    <input type="number"
                        step="0.000001"
                        value={this.state.lat}
                        onChange={this.handleChange("lat").bind(this)}
                        placeholder="Lattitude"
                        className="listings-info"
                    />
                    <input type="number"
                        step="0.000001"
                        value={this.state.lng}
                        onChange={this.handleChange("lng").bind(this)}
                        placeholder="Longitude"
                        className="listings-info"
                    />
                    <input type="file"
                        multiple="multiple"
                        onChange={this.handleFile.bind(this)}
                        className="listings-info"
                    />
                    <button className="listings-button">Create Listing</button>
                    {/* <ul>{errors}</ul> */}
                </form>
            </div>
        )
    }
}

export default ListingsForm;