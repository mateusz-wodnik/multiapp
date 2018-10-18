import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import mapboxgl from 'mapbox-gl';
import * as actions from './actions';
import { MapConsumer } from '../../Map';

class Marker extends Component {
  componentDidMount() {
    const { map } = this.props;
    map && this.createMarker();
  }

  componentDidUpdate(prevProps) {
    const { map } = this.props;
    if (prevProps.map !== map) {
      this.createMarker();
    }
    // if (prevProps.coordinates !== coordinates) {
    //   // TODO: fix set transition only to elements where actual values has changed not only object references
    //   console.log(prevProps.coordinates, coordinates);
    //   // this.marker.getElement().style = 'transition: 2s';
    //   this.marker.setLngLat(coordinates);
    // }
  }

  componentWillUnmount() {
    this.marker.remove();
  }

  createMarker = () => {
    const { map, coordinates, children } = this.props;
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

const ConnectedMarker = connect(null, { ...actions })(Marker);

export default React.forwardRef((props, ref) => (
  <MapConsumer>
    {context => <ConnectedMarker {...props} {...context} ref={ref} />}
  </MapConsumer>
));
