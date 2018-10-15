/* eslint-disable */
import React, { Component, createRef } from 'react';
// import bs from 'bootstrap/dist/css/bootstrap.min.css';
import mapboxgl from 'mapbox-gl';
import customStyle from './customStyle';

import styles from './Map.module.sass';

class Map extends Component {
  constructor(props) {
    super(props);
    this.mapContainer = createRef();
  }
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      center: [51.107883, 17.038538],
      maxBounds: [[16.652, 50.877], [17.363, 51.311]],
      minZoom: 0,
      zoom: 14,
      maxZoom: 14,
      style: customStyle(location.origin, location.pathname)
    });
  }
  render() {
    return (
      <div ref={this.mapContainer} className={styles.map}></div>
    );
  }
}

export default Map;
