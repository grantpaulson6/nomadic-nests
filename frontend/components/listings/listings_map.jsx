import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class ListingsMap extends React.Component {

    //calculate zoom;

    componentDidMount() {
        let mapOptions;
        if (this.props.current_location) {
            mapOptions = {
                center: { lat: this.props.current_location.lat,
                    lng: this.props.current_location.lng
                }, zoom: this.props.current_location.zoom
            };
        } else {
            mapOptions = {
                center: { lat: 50,
                    lng: -114
                }, zoom: 3
            };
        }
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        this.map.addListener('idle', () => {
            const bounds = this.map.getBounds().toJSON();
            this.props.updateBounds(bounds);
        });
        this.MarkerManager = new MarkerManager(this.map, this.props.history);
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

export default withRouter(ListingsMap);