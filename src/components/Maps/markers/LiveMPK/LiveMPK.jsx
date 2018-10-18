import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import Marker from '../../../../modules/Map/components/Marker/Marker';
import styles from './LiveMPK.module.sass';
import * as actions from './actions';
import Layer from '../../../../modules/Map/components/Layer/Layer';
import live from './live.data';
import stations from '../StationsMPK/stations.data';
import geoJSONParser from '../../../../_utils/geoJSONParser';

class LiveMPK extends Component {
  componentDidMount() {
    const { setMarkersRequest } = this.props;
    // Set interval to update markers position every 10 seconds
    setInterval(() => setMarkersRequest(32, 145), 10000);
  }

  render() {
    const { markers } = this.props;
    console.log('propsrrs', this.props)
    return <Layer id="live" features={markers} icon="/bus-blue.png" iconSize={2} textField="name" />;
  }
}

LiveMPK.defaultProps = {
  setMarkersRequest: () => null,
  markers: {},
};

LiveMPK.propTypes = {
  setMarkersRequest: PropTypes.func,
  markers: PropTypes.objectOf(PropTypes.object),
};

const mapStateToProps = state => ({
  ...state.maps.mpk,
});

export default connect(mapStateToProps, { ...actions })(LiveMPK);
