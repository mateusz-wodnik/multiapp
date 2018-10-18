import React from 'react';
import connect from 'react-redux/es/connect/connect';
import styles from './SearchBox.module.sass';
import bs from '../../../../styles/bootstrap.module.css';
import GooglePlaces from '../../../../modules/GoogleWrapper/services/GooglePlaces/GooglePlaces';
import GoogleWrapper from '../../../../modules/GoogleWrapper/GoogleWrapper';
import * as actions from './actions';

const SearchBox = ({ service, onChange, ref, setPlace }) => (
  <div className={`${styles.container} ${bs['input-group']}`}>
    <div className={bs['input-group-prepend']}>
      <span className={bs['input-group-text']} id="basic-addon1">G</span>
    </div>
    <GoogleWrapper>
      <GooglePlaces listnerCallback={setPlace}>
        <input
          type="text"
          className={bs['form-control']}
          name="place"
          placeholder="Search place"
          aria-label="Search place"
          aria-describedby="basic-addon1"
          disabled={!service}
          onChange={onChange}
          ref={ref}
        />
      </GooglePlaces>
    </GoogleWrapper>
  </div>
);

const mapStateToProps = state => ({
  ...state.place,
  service: state.googleMapsService.service,
});

export default connect(mapStateToProps, { ...actions })(SearchBox);
