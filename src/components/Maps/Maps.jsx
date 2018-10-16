import React, { Component } from 'react';
import Map from '../../modules/Map/Map';
import LiveMPK from './components/LiveMPK/LiveMPK';

class Maps extends Component {
  state = {
    mpk: true,
  };

  render() {
    const { mpk } = this.state;
    return (
      <Map>
        <LiveMPK />
      </Map>
    );
  }
}

export default Maps;
