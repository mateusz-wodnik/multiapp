import React, { Component } from 'react';
import Map from '../../modules/Map/Map';
import LiveMPK from './markers/LiveMPK/LiveMPK';
import StationsMPK from './markers/StationsMPK/StationsMPK';

class Maps extends Component {
  state = {
    mpk: true,
  };

  render() {
    const { mpk } = this.state;
    return (
      <Map>
        <LiveMPK />
        <StationsMPK />
      </Map>
    );
  }
}

export default Maps;
