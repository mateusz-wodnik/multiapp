import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import { MapConsumer } from '../../Map';

class Marker extends Component {
  componentDidMount() {
    const { map, coordinates } = this.props;
    if (map) {
      this.createMarker();
      this.handleFly(coordinates);
    }
  }

  // componentDidUpdate(prevProps) {
  //  if (prevProps.coordinates !== coordinates) {
  //     // TODO: fix set transition only to elements where actual values has changed not only object references
  //    console.log(prevProps.coordinates, coordinates);
  //    // this.marker.getElement().style = 'transition: 2s';
  //    this.marker.setLngLat(coordinates);
  //  }
  // }

  componentWillUnmount() {
    this.marker.remove();
  }

  handleFly = (center) => {
    const { map } = this.props;
    map.flyTo({
      center,
    });
  };

  createMarker = () => {
    const { map, coordinates, children } = this.props;
    // Creating HTML from JSX, because Mapbox gl accepts only pure HTML elements as a custom marker
    const str = ReactDOMServer.renderToString(children);
    const marker = document.createRange().createContextualFragment(str).children[0];
    this.marker = new mapboxgl.Marker(marker)
      .setLngLat(coordinates)
      .addTo(map);
  };

  render = () => null
}

Marker.defaultProps = {
  children: null,
  coordinates: [],
  map: null,
};

Marker.propTypes = {
  children: PropTypes.node,
  coordinates: PropTypes.arrayOf(PropTypes.number),
  map: PropTypes.objectOf(PropTypes.object),
};

export default React.forwardRef((props, ref) => (
  <MapConsumer>
    {context => <Marker {...props} {...context} ref={ref} />}
  </MapConsumer>
));
