import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "./Main.module.css";

import Menu from "./Menu";
import Header from "./Header";

// Pages
import { About, Error, Boards, Home } from "./pages";

const App = () => {
  return (
    <div className={styles.main_container}>
      <BrowserRouter>
        <Header />
        <div className={styles.content_container}>
          <Menu />
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/boards/:board" element={<Boards />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
