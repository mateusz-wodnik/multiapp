import React from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import styles from './SearchBox.module.sass';
import bs from '../../../../styles/bootstrap.module.css';
import GooglePlaces from '../../../../modules/GoogleWrapper/services/GooglePlaces/GooglePlaces';
import GoogleWrapper from '../../../../modules/GoogleWrapper/GoogleWrapper';

const SearchBox = ({
  service,
  onChange,
  ref,
  setPlace,
  value,
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
          defaultValue={value}
          onChange={onChange}
          ref={ref}
        />
      </GooglePlaces>
    </GoogleWrapper>
    {!service && (
      <input
        type="text"
        className={bs['form-control']}
        placeholder="Search place"
        aria-label="Search place"
        defaultValue={value}
        disabled
      />
    )}
  </div>
);

SearchBox.defaultProps = {
  setPlace: () => null,
  onChange: () => null,
  ref: null,
  value: '',
  service: false,
};

SearchBox.propTypes = {
  setPlace: PropTypes.func,
  onChange: PropTypes.func,
  ref: PropTypes.node,
  value: PropTypes.string,
  service: PropTypes.bool,
};

const mapStateToProps = state => ({
  service: state.googleMapsService.service,
});

export default connect(mapStateToProps)(SearchBox);
