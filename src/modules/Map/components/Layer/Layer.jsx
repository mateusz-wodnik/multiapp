/* eslint-disable */
import React, { Component } from 'react';
import { MapConsumer } from '../../Map';

class Layer extends Component {
  componentDidMount() {
    const { map } = this.props;
    console.log(this.props)
  }

  componentDidUpdate(prevProps) {
    const { map } = this.props;
    console.log(this.props)
    if (prevProps.map !== map) {
      console.log(this.props)
      this.addIcon(map)
    }
  }

  addIcon = (map) => {
    map.loadImage('/station.png', (error, image) => {
      if (error) throw error;
      map.addImage('station', image);
      this.addLayer(map)
    });
  }

  addLayer = (map) => {
    const { features } = this.props;
    console.log(features);
    map.addLayer({
      "id": "points",
      "type": "symbol",
      "source": {
        "type": "geojson",
        "data": features
      },
      "layout": {
        "icon-image": "station",
        "icon-size": 0.75,
        // "text-field": "{name}",
        // "text-size": 8,
        // "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        // "text-offset": [0, 2],
        // "text-anchor": "top"
      }
    });
  };

  render = () => null;
}

export default React.forwardRef((props, ref) => (
  <MapConsumer>
    {context => <Layer {...props} {...context} ref={ref} />}
  </MapConsumer>
));
