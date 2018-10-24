import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import Layer from '../../../../modules/Map/components/Layer/Layer';
import { setMarkersRequest } from './actions';

class StationsMPK extends Component {
  componentDidMount() {
    const { setMarkersRequest } = this.props;
    setMarkersRequest(32, 145);
  }

  render() {
    const { markers, hide } = this.props;
    return <Layer id="stations" hide={hide} features={markers} icon="/station.png" iconSize={0.6} />;
  }
}

StationsMPK.defaultProps = {
  setMarkersRequest: () => null,
  markers: {},
};

StationsMPK.propTypes = {
  setMarkersRequest: PropTypes.func,
  markers: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = state => ({
  ...state.maps.stations,
});

export default connect(mapStateToProps, { setMarkersRequest })(StationsMPK);
