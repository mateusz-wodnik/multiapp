import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import Marker from '../../../../modules/Map/components/Marker/Marker';
import styles from './StationsMPK.module.sass';
import Layer from '../../../../modules/Map/components/Layer/Layer';
import * as actions from './actions';
import stations from './stations.data';

class StationsMPK extends Component {
  componentDidMount() {
    const { setMarkersRequest } = this.props;
    setMarkersRequest(32, 145);
  }

  render() {
    const { markers } = this.props;
    // return markers.map((item, idx) => idx < 50 ? (
    //   <Marker key={item.name + idx} coordinates={[item.y, item.x]}>
    //     <span className={styles.marker}>x</span>
    //   </Marker>
    // ) : null);
    return <Layer features={stations} />;
  }
}

StationsMPK.defaultProps = {
  setMarkersRequest: () => null,
  markers: [],
};

StationsMPK.propTypes = {
  setMarkersRequest: PropTypes.func,
  markers: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  ...state.maps.stations,
});

export default connect(mapStateToProps, { ...actions })(StationsMPK);
