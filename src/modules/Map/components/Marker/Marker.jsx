import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import mapboxgl from 'mapbox-gl';
import * as actions from './actions';
import { MapConsumer } from '../../Map';

class Marker extends Component {
  componentDidMount() {
    const { context: { map }, coordinates, children } = this.props;
    console.log(this.props)
    const str = ReactDOMServer.renderToString(children);
    const marker = document.createRange().createContextualFragment(str).children[0];
    // this.marker = new mapboxgl.Marker(marker)
    //   .setLngLat(coordinates)
    //   .addTo(map);
  }

  componentDidUpdate(prevProps) {
    const { context: { map }, coordinates, children } = this.props;
    console.log(this.props)
    if (prevProps.context.map !== map) {
      console.log(this.props)
      const str = ReactDOMServer.renderToString(children);
      const marker = document.createRange().createContextualFragment(str).children[0];
      this.marker = new mapboxgl.Marker(marker)
        .setLngLat(coordinates)
        .addTo(map);
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

  render = () => null
}

Marker.defaultProps = {
  children: null,
  coordinates: [],
  addMarker: () => null,
};

Marker.propTypes = {
  children: PropTypes.node,
  coordinates: PropTypes.arrayOf(PropTypes.number),
  addMarker: PropTypes.func,
};

const ConnectedMarker = connect(null, { ...actions })(Marker);

export default React.forwardRef((props, ref) => (
  <MapConsumer>
    {context => <ConnectedMarker {...props} context={context} ref={ref} />}
  </MapConsumer>
));
