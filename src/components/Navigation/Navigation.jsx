import React from 'react';
import { NavLink } from 'react-router-dom';
import bs from '../../styles/bootstrap.module.css';
import styles from './Navigation.module.sass';

const Navigation = () => (
  <nav className={`${styles.container} ${bs.container}`}>
    <NavLink to="/overview" className={styles.link} activeClassName={styles.active}>Overview</NavLink>
    <NavLink to="/maps" className={styles.link} activeClassName={styles.active}>Map</NavLink>
    <NavLink to="/tasks-list" className={styles.link} activeClassName={styles.active}>Tasks</NavLink>
    <NavLink to="/weather" className={styles.link} activeClassName={styles.active}>Weather</NavLink>
  </nav>
);

export default Navigation;
