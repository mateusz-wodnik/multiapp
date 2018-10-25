import { Component, createRef, cloneElement } from 'react';
import PropTypes from 'prop-types';
import GooglePlacesAPI from '../../../../APIS/googlePlacesAPI';

class GooglePlaces extends Component {
  constructor(props) {
    super(props);
    this.input = createRef();
  }

  componentDidMount() {
    this.setAutocomplete(this.input.current);
  }

  setAutocomplete = (input) => {
    GooglePlacesAPI.setAutocomplete(input, this.handleSelect);
  };

  handleSelect = (place) => {
    const { selectCallback } = this.props;
    // Pass selected place data to input element (if input is nested in form element)
    this.input.current.dataset.geoJSON = JSON.stringify(place);
    selectCallback(place);
  };

  render() {
    const { children } = this.props;
    return cloneElement(children, { ref: this.input });
  }
}

GooglePlaces.defaultProps = {
  children: null,
  selectCallback: () => null,
};

GooglePlaces.propTypes = {
  children: PropTypes.node,
  selectCallback: PropTypes.func,
};

export default GooglePlaces;
