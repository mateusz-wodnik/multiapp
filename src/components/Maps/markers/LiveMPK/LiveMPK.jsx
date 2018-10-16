import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import Marker from '../../../../modules/Map/components/Marker/Marker';
import styles from './LiveMPK.module.sass';
import * as actions from './actions';

class LiveMPK extends Component {
  componentDidMount() {
    const { setMarkersRequest } = this.props;
    // Set interval to update markers position every 10 seconds
    setInterval(() => setMarkersRequest(32, 145), 10000);
  }

  render() {
    const { markers } = this.props;
    return markers.map((item, idx) => (
      <Marker key={item.name + idx} coordinates={[item.y, item.x]}>
        <span className={`${styles.marker} ${styles[item.type]}`}>{item.name}</span>
      </Marker>
    ));
  }
}

LiveMPK.defaultProps = {
  setMarkersRequest: () => null,
  markers: [],
};

LiveMPK.propTypes = {
  setMarkersRequest: PropTypes.func,
  markers: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  ...state.maps.mpk,
});

export default connect(mapStateToProps, { ...actions })(LiveMPK);
