/* eslint-disable */
import React, { Component, createRef, createContext } from 'react';
// import bs from 'bootstrap/dist/css/bootstrap.min.css';
import mapboxgl from 'mapbox-gl';
// import MapboxDirections from '@mapbox/mapbox-gl-directions';
import 'mapbox-gl/dist/mapbox-gl.css';
import customStyle from './customStyle';

import styles from './Map.module.sass';
import getCurrentPosition from './_utils/getCurrentPosition';
import { connect } from 'react-redux';
import * as actions from './actions';
import PropTypes from 'prop-types';
import Marker from './components/Marker/Marker';
import data from './mpk.data';
import { updateMarker, setMarkers } from './components/Marker/actions';

const MapContext = createContext('elo');
export const MapProvider = MapContext.Provider;
export const MapConsumer = MapContext.Consumer;


class Map extends Component {
  constructor(props) {
    super(props);
    this.mapContainer = createRef();
  }

  componentDidMount() {
    const bounds = [
      [16.652, 50.877], // Southwest coordinates
      [17.363, 51.311]  // Northeast coordinates
    ];

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: customStyle(location.origin, location.pathname),
      center: [17.038538, 51.107883],
      zoom: 14,
      maxZoom: 14,
      maxBounds: bounds
    });
    this.setCurrentPosition();
    this.props.setMarkers(data)
  }

  setCurrentPosition = () => {
    const map = this.map;
    getCurrentPosition()
      .then(position => {
        map.flyTo({
          center: Object.values(position).map(pos => pos.toPrecision(5)).reverse()
        })
      })
      .catch(err => alert(err))
  };

  render() {
    const map = this.map;
    const { markers } = this.props;
    return (
      <MapProvider value={{ map }}>
        <div ref={this.mapContainer} className={styles.map}>
          <button onClick={() => this.props.updateMarker()} className={styles.btn}>elo</button>
          {markers.map(item => (
            <Marker coordinates={[item.y, item.x]}>
              <span className={styles[item.type]}>{item.name}</span>
            </Marker>
          ))}
        </div>
      </MapProvider>
    );
  }
}

Marker.defaultProps = {
  markers: [],
};

Marker.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  markers: state.map.markers,
});

export default connect(mapStateToProps, { updateMarker, setMarkers })(Map);
