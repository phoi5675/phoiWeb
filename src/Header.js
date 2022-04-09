import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import { ReactComponent as SearchIcon } from "./assets/searchIcon.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navHome}>
        <Link className={styles.navText} to="/">
          phoiweb.com
        </Link>
      </nav>
      <div className={styles.searchBtn}>
        <SearchIcon className={styles.searchIcon} />
      </div>
    </div>
  );
};

export default Header;
