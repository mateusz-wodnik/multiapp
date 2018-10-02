import React from 'react';
import PropTypes from 'prop-types';
import styles from './Users.sass';

const Users = ({ users }) => (
  <article className={styles.container}>
    <header className={styles.header}>

    </header>
    <section className={styles.content}>

    </section>
  </article>
);

Users.defaultProps = {
  users: [],
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

export default Users;
