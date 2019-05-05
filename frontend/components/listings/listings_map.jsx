import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ListingsMap extends React.Component {

    //calculate zoom;

    componentDidMount() {
        const mapOptions = {
            center: { lat: this.props.current_location.lat,
                lng: this.props.current_location.lng
            }, zoom: 7
        };
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        this.map.addListener('idle', () => {
            const bounds = this.map.getBounds().toJSON();
            this.props.updateBounds(bounds);
        });
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.listings);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.listings);
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