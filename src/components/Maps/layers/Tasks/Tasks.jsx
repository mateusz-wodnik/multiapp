import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import Layer from '../../../../modules/Map/components/Layer/Layer';
import { setMarkersRequest } from './actions';

class Tasks extends Component {
  componentDidMount() {
    const { setMarkersRequest } = this.props;
    setMarkersRequest();
  }

  handleHover = (map) => {
    map.on('click', 'tasks', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const { description, name } = e.features[0].properties;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description || name)
        .addTo(map);
    });

    map.on('mouseenter', 'tasks', () => {
      map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'tasks', () => {
      map.getCanvas().style.cursor = '';
    });
  };

  render() {
    const { features, hide } = this.props;
    return <Layer id="tasks" hide={hide} textField="name" features={features} icon="/tram-red.png" iconSize={1} custom={this.handleHover} />;
  }
}

Tasks.defaultProps = {
  setMarkersRequest: () => null,
  features: {},
  hide: false,
};

Tasks.propTypes = {
  setMarkersRequest: PropTypes.func,
  features: PropTypes.objectOf(PropTypes.any),
  hide: PropTypes.bool,
};

const mapStateToProps = state => ({
  features: state.maps.tasks.result,
});

export default connect(mapStateToProps, { setMarkersRequest })(Tasks);
