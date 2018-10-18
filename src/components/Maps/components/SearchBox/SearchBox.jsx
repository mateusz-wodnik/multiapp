import React from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import styles from './SearchBox.module.sass';
import bs from '../../../../styles/bootstrap.module.css';
import GooglePlaces from '../../../../modules/GoogleWrapper/services/GooglePlaces/GooglePlaces';
import GoogleWrapper from '../../../../modules/GoogleWrapper/GoogleWrapper';
import { setPlace } from './actions';

const SearchBox = ({
  service,
  onChange,
  ref,
  setPlace,
}) => (
  <div className={`${styles.container} ${bs['input-group']}`}>
    <div className={bs['input-group-prepend']}>
      <span className={bs['input-group-text']} id="googleAttribution">G</span>
    </div>
    <GoogleWrapper>
      <GooglePlaces listnerCallback={setPlace}>
        <input
          type="text"
          className={bs['form-control']}
          name="place"
          placeholder="Search place"
          aria-label="Search place"
          aria-describedby="googleAttribution"
          disabled={!service}
          onChange={onChange}
          ref={ref}
        />
      </GooglePlaces>
    </GoogleWrapper>
  </div>
);

SearchBox.defaultProps = {
  setPlace: () => null,
  service: false,
  onChange: () => null,
  ref: null,
};

SearchBox.propTypes = {
  setPlace: PropTypes.func,
  service: PropTypes.bool,
  onChange: PropTypes.func,
  ref: PropTypes.node,
};

const mapStateToProps = state => ({
  ...state.place,
  service: state.googleMapsService.service,
});

export default connect(mapStateToProps, { setPlace })(SearchBox);
