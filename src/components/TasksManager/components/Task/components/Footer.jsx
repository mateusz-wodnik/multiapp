import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Task.module.sass';
import bs from '../../../../../styles/bootstrap.module.css';

const Footer = ({ tags, editable }) => (
  <div className={bs['card-footer']}>
    <ul className={styles.tags}>
      {tags.map(tag => (
        <li className={`${bs.badge} ${bs['badge-info']} ${styles.tag}`}>
          #
          {tag}
        </li>
      ))}
    </ul>
  </div>
);

Footer.defaultProps = {
  tags: [],
  editable: false,
};

Footer.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  editable: PropTypes.bool,
};

export default Footer;
