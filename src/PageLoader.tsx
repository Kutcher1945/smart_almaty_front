import React from 'react';
import logo from './logo.svg';
import styles from './PageLoader.module.css';

const PageLoader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <img src={logo} className={`${styles.logo} ${styles.blink}`} alt="logo" />
    </div>
  );
};

export default PageLoader;
