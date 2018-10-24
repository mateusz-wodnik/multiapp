import keys from './APIKeys';

export default class GooglePlacesAPI {
  constructor() {
    this.baseUrl = 'https://maps.googleapis.com/maps/api/place';
    this.fromText = (input, inputType = 'textquery') => `${this.baseUrl}/findplacefromtext/json?key=${keys.googlePlaces}&input=${input}&inputtype=${inputType}&locationbias=rectangle:16.652,50.877|17.363,51.311&fields=formatted_address,geometry,icon,id,name,permanently_closed,photos,place_id,plus_code`;
  }

  init(libraries) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?libraries=${libraries.toString()}&key=${keys.googleMaps}`;
      script.onload = () => resolve(window.google.maps);
      script.onerror = () => reject(Error("Couldn't load Google Maps service"));
      document.head.appendChild(script);
    })
      .then((res) => {
        const node = document.createElement('span');
        this.places = res.places;
        this.placesService = new res.places.PlacesService(node);
      });
  }

  findPlace(query, fields) {
    const locationBias = [{ lat: 16.652, lng: 50.877 }, { lat: 17.363, lng: 51.311 }];
    return new Promise((resolve, reject) => {
      this.placesService.findPlaceFromQuery({
        query,
        fields,
        locationBias,
      }, (results, status) => {
        if (status != this.places.PlacesServiceStatus.OK) reject(Error('Could not get searched place data.')); // eslint-disable-line
        resolve(results);
      });
    });
  }

  static setAutocomplete(input, listenerCallback) {
    const { LatLngBounds, LatLng, places: { Autocomplete } } = window.google.maps;
    const bounds = new LatLngBounds(
      new LatLng(50.877, 16.652),
      new LatLng(51.311, 17.363),
    );
    const options = {
      bounds,
      types: ['establishment'],
    };
    const autocomplete = new Autocomplete(input, options);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      const { name, website, geometry: { location } } = place;
      const { lat, lng } = location;
      const geoJSON = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lng(), lat()],
        },
        properties: {
          name,
          website,
        },
      };
      listenerCallback(geoJSON);
    });
  }
}
