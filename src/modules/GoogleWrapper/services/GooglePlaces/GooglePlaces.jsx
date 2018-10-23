import { Component, createRef, cloneElement } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import GooglePlacesAPI from '../../../../APIS/googlePlacesAPI';

class GooglePlaces extends Component {
  constructor(props) {
    super(props);
    this.input = createRef();
  }

  componentDidMount() {
    const { service } = this.props;
    if (service) this.handleAutocomplete(this.input.current);
  }

  componentDidUpdate(prevProps) {
    const { service } = this.props;
    if (prevProps.service !== service) {
      this.handleAutocomplete(this.input.current);
    }
  }

  handleSelect = (place) => {
    const { listnerCallback } = this.props;
    this.input.current.dataset.geoJSON = JSON.stringify(place);
    listnerCallback(place);
  };

  handleAutocomplete = (input) => {
    GooglePlacesAPI.setAutocomplete(input, this.handleSelect);
  };

  render() {
    const { children } = this.props;
    return cloneElement(children, { ref: this.input });
  }
}

GooglePlaces.defaultProps = {
  children: null,
  service: false,
  listnerCallback: () => null,
};

GooglePlaces.propTypes = {
  children: PropTypes.node,
  service: PropTypes.bool,
  listnerCallback: PropTypes.func,
};

const mapStateToProps = state => ({
  service: state.googleMapsService.service,
});

export default connect(mapStateToProps)(GooglePlaces);
