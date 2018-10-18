import { Component } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { setGoogleMapsServiceRequest } from './actions';

class GoogleWrapper extends Component {
  componentDidMount() {
    const { setGoogleMapsServiceRequest, service } = this.props;
    if (!service) setGoogleMapsServiceRequest('places');
  }

  render() {
    const { children } = this.props;
    return children;
  };
}

GoogleWrapper.defaultProps = {
  children: null,
  service: false,
  setGoogleMapsServiceRequest: () => null,
};

GoogleWrapper.propTypes = {
  children: PropTypes.node,
  service: PropTypes.bool,
  setGoogleMapsServiceRequest: PropTypes.func,
};

const mapStateToProps = state => ({
  service: state.googleMapsService.service,
});

export default connect(mapStateToProps, { setGoogleMapsServiceRequest })(GoogleWrapper);
