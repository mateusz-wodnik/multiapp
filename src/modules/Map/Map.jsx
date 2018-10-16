import React, { Component, createRef, createContext } from 'react';
import PropTypes from 'prop-types';
// import bs from 'bootstrap/dist/css/bootstrap.min.css';
import mapboxgl from 'mapbox-gl';
// import MapboxDirections from '@mapbox/mapbox-gl-directions';
import 'mapbox-gl/dist/mapbox-gl.css';
import customStyle from './customStyle';

import styles from './Map.module.sass';
import getCurrentPosition from './_utils/getCurrentPosition';
import Layer from './components/Layer/Layer';

const MapContext = createContext('elo');
export const MapProvider = MapContext.Provider;
export const MapConsumer = MapContext.Consumer;


class Map extends Component {
  constructor(props) {
    super(props);
    this.mapContainer = createRef();
  }

  state = {
    map: null,
  };

  componentDidMount() {
    const bounds = [
      [16.652, 50.877], // Southwest coordinates
      [17.363, 51.311], // Northeast coordinates
    ];
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: customStyle(location.origin, location.pathname), // eslint-disable-line
      center: [17.038538, 51.107883],
      zoom: 14,
      maxZoom: 14,
      maxBounds: bounds,
    });
    map.on('load', () => {
      this.setState({ map }, () => this.setCurrentPosition(this.state.map)); // eslint-disable-line
    });
  }

  setCurrentPosition = (map) => {
    getCurrentPosition()
      .then((position) => {
        map.flyTo({
          center: Object.values(position).map(pos => pos.toPrecision(5)).reverse(),
        });
      })
      .catch(err => alert(err));
  };

  render() {
    const { state, props } = this;
    const { map } = state;
    const { children } = props;
    return (
      <MapProvider value={{ map }}>
        <div ref={this.mapContainer} className={styles.map}>
          {children}
        </div>
      </MapProvider>
    );
  }
}

Map.defaultProps = {
  children: null,
};

Map.propTypes = {
  children: PropTypes.node,
};

export default Map;
