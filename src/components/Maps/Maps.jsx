import React, { Component } from 'react';
import Map from '../../modules/Map/Map';
import LiveMPK from './layers/LiveMPK/LiveMPK';
import StationsMPK from './layers/StationsMPK/StationsMPK';
import SearchBox from './components/SearchBox/SearchBox';

class Maps extends Component {
  state = {
    stations: true,
    live: true,
    search: true,
    // TODO: Add tasks layer that contains all daily tasks places
  };

  render() {
    const {
      stations,
      live,
      search,
    } = this.state;
    return (
      <Map>
        <StationsMPK hide={stations} />
        <LiveMPK hide={live} />
        <SearchBox hide={search} />
      </Map>
    );
  }
}

export default Maps;
