import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { setMarkersRequest } from './actions';
import Layer from '../../../../modules/Map/components/Layer/Layer';

class LiveMPK extends Component {
  componentDidMount() {
    const { setMarkersRequest } = this.props;
    // Set interval to update layers position every 10 seconds
    this.requestInterval = setInterval(() => setMarkersRequest([32, 145]), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.requestInterval);
  }

  render() {
    const { features, hide } = this.props;
    return <Layer id="live" hide={hide} features={features} icon={`${process.env.PUBLIC_URL}/static/media/bus-blue.png`} iconSize={1} textField="name" />;
  }
}

LiveMPK.defaultProps = {
  setMarkersRequest: () => null,
  features: {},
  hide: false,
};

LiveMPK.propTypes = {
  setMarkersRequest: PropTypes.func,
  features: PropTypes.objectOf(PropTypes.any),
  hide: PropTypes.bool,
};

const mapStateToProps = state => ({
  features: state.maps.mpk.result,
});

export default connect(mapStateToProps, { setMarkersRequest })(LiveMPK);
