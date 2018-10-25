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
    const { features, hide } = this.props;
    return <Layer id="stations" hide={hide} features={features} icon="/station.png" iconSize={0.6} />;
  }
}

StationsMPK.defaultProps = {
  setMarkersRequest: () => null,
  features: {},
  hide: false,
};

StationsMPK.propTypes = {
  setMarkersRequest: PropTypes.func,
  features: PropTypes.objectOf(PropTypes.any),
  hide: PropTypes.bool,
};

const mapStateToProps = state => ({
  features: state.maps.stations.result,
});

export default connect(mapStateToProps, { setMarkersRequest })(StationsMPK);
