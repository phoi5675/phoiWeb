import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.container}>
          <Link className={styles.navBtn} to='/'>Home</Link>
          <Link className={styles.navBtn} to='/about'>About</Link>
    </nav>
  );
};

export default Navbar;
