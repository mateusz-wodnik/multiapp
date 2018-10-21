import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Task.module.sass';
import bs from '../../../../../styles/bootstrap.module.css';

const Body = ({ description, editable, descriptionRef }) => (
  <div className={`${styles.content} ${bs['card-body']}`}>
    <p ref={descriptionRef} className={`${bs['card-text']} ${styles.description} ${editable ? styles.editable : ''}`} contentEditable={editable}>{description}</p>
  </div>
);

Body.defaultProps = {
  description: '',
  editable: false,
};

Body.propTypes = {
  description: PropTypes.string,
  editable: PropTypes.bool,
};

export default Body;
