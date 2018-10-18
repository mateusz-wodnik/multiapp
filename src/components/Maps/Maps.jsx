import React, { Component } from 'react';
import Map from '../../modules/Map/Map';
import LiveMPK from './markers/LiveMPK/LiveMPK';
import StationsMPK from './markers/StationsMPK/StationsMPK';
import GooglePlaces from '../../modules/GoogleWrapper/services/GooglePlaces/GooglePlaces';
import GoogleWrapper from '../../modules/GoogleWrapper/GoogleWrapper';
import SearchBox from './components/SearchBox/SearchBox';

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
        <SearchBox />
      </Map>
    );
  }
}

export default Maps;
