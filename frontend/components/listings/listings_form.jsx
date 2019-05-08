import React from 'react';

class ListingsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            price: "",
            location: "",
            description: "",
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
                this.state[key].forEach( photo => {
                    formData.append(`listing[photos][]`, photo);
                });
            } else {
                formData.append(`listing[${key}]`, this.state[key]);
            }
        }
        const button = document.getElementById("lsb1");
        button.className += " disabled";
        button.disabled = true;
        button.innerHTML = "Uploading";
        this.props.createListing(formData)
            .then(this.props.closeModal)
            .then(() => this.props.history.push(`/listings/${this.props.new_listing}`))
            .fail(() => {
                button.classList.remove("disabled");
                button.disabled = false;
                button.innerHTML = "Create Listing";
            });
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleFile(e) {
        const addedFiles = this.state.photos.concat(e.currentTarget.files[e.currentTarget.files.length - 1]);
        this.setState({ photos: addedFiles});
    }

    render() {
        return (
            <div className="create-listings">
                <i className="fas fa-times" onClick={this.props.closeModal}></i>
                <h1>Fill out your nests details!</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text"
                        value={this.state.title}
                        onChange={this.handleChange("title").bind(this)}
                        placeholder="Title"
                        className="listings-info"
                    />
                    <div className="form-errors">{this.props.errors["title"]}</div>
                    <input type="number"
                        step="0.01"
                        value={this.state.price}
                        onChange={this.handleChange("price").bind(this)}
                        placeholder="Price"
                        className="listings-info"
                    />
                    <div className="form-errors">{this.props.errors["price"]}</div>
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
                    <div className="form-errors">{this.props.errors["location"]}</div>
                    <textarea onChange={this.handleChange("description").bind(this)}
                        value={this.state.description}
                        className="listings-info"
                        placeholder="A little bit about your nest...">
                    </textarea>
                    <div className="form-errors">{this.props.errors["description"]}</div>
                    <select onChange={this.handleChange("property_type").bind(this)}
                        className="listings-info">
                        <option disabled selected>Type of Nest</option>
                        <option value="campground">Campground</option>
                        <option value="dispersed camping">Dispersed Camping</option>
                        <option value="guest friends/family">Guest of friends/family</option>
                        <option value="cabin">Cabin</option>
                    </select>
                    <div className="form-errors">{this.props.errors["property_type"]}</div>
                    <input type="number"
                        value={this.state.max_guests}
                        onChange={this.handleChange("max_guests").bind(this)}
                        placeholder="Max Guests"
                        className="listings-info"
                    />
                    <div className="form-errors">{this.props.errors["max_guests"]}</div>
                    <input type="number"
                        value={this.state.num_beds}
                        onChange={this.handleChange("num_beds").bind(this)}
                        placeholder="Number of beds"
                        className="listings-info"
                    />
                    <div className="form-errors">{this.props.errors["num_beds"]}</div>
                    <input type="number"
                        value={this.state.num_bathrooms}
                        onChange={this.handleChange("num_bathrooms").bind(this)}
                        placeholder="Number of bathrooms"
                        className="listings-info"
                    />
                    <div className="form-errors">{this.props.errors["num_bathrooms"]}</div>
                    <input type="text"
                        value={this.state.address}
                        onChange={this.handleChange("address").bind(this)}
                        placeholder="Address"
                        className="listings-info"
                    />
                    <div className="form-errors">{this.props.errors["address"]}</div>
                    <input type="number"
                        step="0.000001"
                        max="90"
                        min="-90"
                        value={this.state.lat}
                        onChange={this.handleChange("lat").bind(this)}
                        placeholder="Lattitude"
                        className="listings-info"
                    />
                    <div className="form-errors">{this.props.errors["lat"]}</div>
                    <input type="number"
                        step="0.000001"
                        max="180"
                        min="-180"
                        value={this.state.lng}
                        onChange={this.handleChange("lng").bind(this)}
                        placeholder="Longitude"
                        className="listings-info"
                    />
                    <div className="form-errors">{this.props.errors["lng"]}</div>
                    <input type="file"
                        multiple="multiple"
                        onChange={this.handleFile.bind(this)}
                    />
                    <div className="form-errors">{this.props.errors["photos"]}</div>
                    <button className="listings-button" id="lsb1">Create Listing</button>
                </form>
            </div>
        )
    }
}

export default ListingsForm;