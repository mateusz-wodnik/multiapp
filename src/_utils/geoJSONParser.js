function geoJSONParser(json, latName, lngName) {
  const geoJSON = {
    type: 'FeatureCollection',
    features: [],
  };
  const Feature = (lat, lng, properties) => ({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [lng, lat],
    },
    properties,
  });
  json.forEach((place) => {
    const { [latName]: lat, [lngName]: lng, ...properties } = place;
    geoJSON.features.push(Feature(lat, lng, properties));
  });
  return geoJSON;
}

export default geoJSONParser;
