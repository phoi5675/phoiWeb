import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './Main.module.css';

import Menu from './Menu';
import Navbar from './Navbar';
import Content from './Content';

// Pages
import { About, Error } from './pages';

const Main = () => {
  return (
    <div className={styles.main_container}>
      <BrowserRouter>
        <Navbar />
        <div className={styles.content_container}>
          <Menu />
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Main;
