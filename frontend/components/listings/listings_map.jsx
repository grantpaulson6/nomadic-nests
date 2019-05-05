import React from 'react'

class ListingsMap extends React.Component {

    //calculate zoom;

    componentDidMount() {
        const mapOptions = {
            center: { lat: this.props.current_location.lat,
                lng: this.props.current_location.lng
            }, zoom: 7
        };
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }

    render() {

        return (
            <div className="listing-map map-on"
                id="map-container">
                <div id="map"></div>
            </div>
        )
    }
}

export default ListingsMap;