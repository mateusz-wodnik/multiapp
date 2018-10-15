/* eslint-disable */
import React, { Component, createRef } from 'react';
// import bs from 'bootstrap/dist/css/bootstrap.min.css';
import mapboxgl from 'mapbox-gl';
import customStyle from './customStyle';

import styles from './Map.module.sass';
import getCurrentPosition from './_utils/getCurrentPosition';

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
    this.setCurrentPosition()
  }

  setCurrentPosition = () => {
    getCurrentPosition()
      .then(position => {
        console.log(Object.values(position).map(pos => pos.toPrecision(8)));
        this.map.flyTo({
          center: Object.values(position).map(pos => pos.toPrecision(5)).reverse()
        })
      })
      .catch(err => alert(err))
  };

  render() {
    return (
      <div ref={this.mapContainer} className={styles.map}></div>
    );
  }
}

export default Map;
