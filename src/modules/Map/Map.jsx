import React, { Component, createRef, createContext } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import customStyle from './customStyle';
import styles from './Map.module.sass';

// Pass map component with context API
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
    /* Wroclaw map bounds taken from map metadata */
    const bounds = [
      [16.652, 50.877], // Southwest coordinates
      [17.363, 51.311], // Northeast coordinates
    ];
    console.log(process.env)
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: customStyle(`${location.origin}${process.env.PUBLIC_URL}`, '/static/'), // eslint-disable-line
      center: [17.038538, 51.107883],
      zoom: 14,
      maxZoom: 14,
      maxBounds: bounds,
    });
    map.on('load', () => this.setState({ map }));
  }

  componentDidUpdate(prevProps) {
    const { map } = this.state;
    const { position } = this.props;
    if (map && prevProps.position !== position) {
      this.setPosition(position);
    }
  }

  componentWillUnmount() {
    const { map } = this.state;
    if (map) map.remove();
  }

  setPosition = (position) => {
    const { map } = this.state;
    map.flyTo({ center: position });
  };

  render() {
    const { children } = this.props;
    const { map } = this.state;
    return (
      <MapProvider value={{ map }}>
        <div ref={this.mapContainer} className={styles.map}>
          {map && children}
        </div>
      </MapProvider>
    );
  }
}

Map.defaultProps = {
  children: null,
  position: null,
};

Map.propTypes = {
  children: PropTypes.node,
  position: PropTypes.arrayOf(PropTypes.number),
};

export default Map;
