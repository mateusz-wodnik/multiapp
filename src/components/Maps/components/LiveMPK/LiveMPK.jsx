import React, { Component } from 'react';
import live from './live.data';
import Marker from '../../../../modules/Map/components/Marker/Marker';
import styles from './LiveMPK.module.sass';

class LiveMPK extends Component {
  componentDidMount() {
    // Todo: set interval to fetch and update data
  }

  render() {
    // Todo: get item list from redux
    return live.map(item => (
      <Marker coordinates={[item.y, item.x]}>
        <span className={`${styles.marker} ${styles[item.type]}`}>{item.name}</span>
      </Marker>
    ));
  }
}

export default LiveMPK;
