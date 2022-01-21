import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "./Main.module.css";

import Menu from "./Menu";
import Navbar from "./Navbar";

// Pages
import { About, Error, Home } from "./pages";

const Main = () => {
  return (
    <div className={styles.main_container}>
      <BrowserRouter>
        <Navbar />
        <div className={styles.content_container}>
          <Menu />
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Main;
