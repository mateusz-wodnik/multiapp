import React from 'react';
import bs from '../../../../../../styles/bootstrap.module.css';
import styles from './TopBar.module.sass';
import Switch from '../../../../../../modules/Switch/Switch';

const TopBar = ({ _id, removeTask, handleEditable, topbarToggle }) => (
  <div className={`${bs['card-header']} ${styles.topBar} ${topbarToggle ? styles.opened : ''}`}>
    <button
      type="button"
      className={`${styles.btn} ${styles.remove}`}
      onClick={() => removeTask(_id)}
    />
    <span className={styles.switchLabel}>✎</span>
    <Switch container={styles.switch} onClick={handleEditable} />
  </div>
);

export default TopBar;
