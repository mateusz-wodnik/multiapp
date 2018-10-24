import React, { Component } from 'react';
import queryString from 'query-string';
import Map from '../../modules/Map/Map';
import Marker from '../../modules/Map/components/Marker/Marker';
import LiveMPK from './layers/LiveMPK/LiveMPK';
import StationsMPK from './layers/StationsMPK/StationsMPK';
import SearchBox from './components/SearchBox/SearchBox';
import getCurrentPosition from '../../modules/Map/_utils/getCurrentPosition';
import Tasks from './layers/Tasks/Tasks';
import Filters from './components/Filters/Filters';

class Maps extends Component {
  state = {
    stations: true,
    live: true,
    tasks: true,
    search: true,
    marker: null,
    // TODO: Add tasks layer that contains all daily tasks places
  };

  componentDidMount() {
    this.handleQueries();
    this.handleCurrentPosition();
  }

  componentDidUpdate(prevProps) {
    // Clear map if search queries was set empty
    if (this.props.location.search !== prevProps.location.search) {
      this.handleQueries();
    }
  }

  handleCurrentPosition = () => {
    getCurrentPosition()
      .then((position => this.setState({ currentPosition: [position.lng, position.lat] })))
      .catch(err => alert(err));
  };

  handleQueries = () => {
    const { location } = this.props;
    const queries = queryString.parse(location.search);
    if (queries.coords) {
      const { coords, name } = queries;
      const coordinates = coords.split(',');
      this.setState({ marker: { coordinates, name } });
    } else {
      this.setState({ marker: null });
    }
  };

  handleSwitch = (item) => this.setState(state => ({ [item]: !state[item] }));

  render() {
    const {
      stations,
      live,
      search,
      tasks,
      marker,
      currentPosition,
    } = this.state;
    return (
      <Map position={marker ? null : currentPosition}>
        <Filters handleSwitch={this.handleSwitch} />
        <StationsMPK hide={stations} />
        <LiveMPK hide={live} />
        <Tasks hide={tasks} />
        <SearchBox hide={search} value={marker && marker.name} />
        {marker && <Marker coordinates={marker.coordinates} />}
      </Map>
    );
  }
}

export default Maps;
