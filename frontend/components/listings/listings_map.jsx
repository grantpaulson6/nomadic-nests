import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class ListingsMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapSearch: false
        };
    }
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
            if (this.state.mapSearch) {
                let bounds = this.map.getBounds().toJSON();
                if (bounds.south <= bounds.north && bounds.west <= bounds.east) {
                    this.props.updateBoundsAndFetch(bounds);
                }
            }
        });
        this.MarkerManager = new MarkerManager(this.map, this.props.history);
        this.MarkerManager.updateMarkers(this.props.listings);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.listings);
    }
    handleChange(e) {
        this.setState({ mapSearch: e.currentTarget.checked });
    }
    render() {

        return (
            <div className="listing-map map-on"
                id="map-container">
                <div id="map-toggle">
                    <input type="checkbox" onChange={this.handleChange.bind(this)}/>
                    Search as I move the map
                </div>
                <div id="map">
                </div>
            </div>
        )
    }
}

export default withRouter(ListingsMap);