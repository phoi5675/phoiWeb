import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.css';

const Menu = () => { 
  return (
    <div className={styles.menu_container}>
      <Link className={styles.menu} to='/board'>Boards</Link>
      <Link className={styles.menu} to='/about'>About</Link>
    </div>
  );
};

export default Menu;