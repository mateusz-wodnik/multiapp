import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import * as actions from './actions';

class Marker extends Component {
  componentDidMount() {
    const { children, coordinates, addMarker } = this.props;
    console.log(children);
    addMarker({
      coordinates,
    });
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

export default connect(null, { ...actions })(Marker);
