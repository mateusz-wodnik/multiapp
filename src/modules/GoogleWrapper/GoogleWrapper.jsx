import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import * as actions from './actions';

class GoogleWrapper extends Component {
  componentDidMount() {
    const { setGoogleMapsServiceRequest } = this.props;
    setGoogleMapsServiceRequest('places');
  }

  render = () => this.props.children || null;
}

export default connect(null, { ...actions })(GoogleWrapper);
