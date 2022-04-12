import React from "react";
import { Link } from "react-router-dom";

import classNames from "classnames";

import styles from "./Header.module.scss";
import { ReactComponent as SearchIcon } from "./assets/searchIcon.svg";

const { useState } = React;

const Header = () => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  return (
    <div className={styles["container"]}>
      <nav className={styles["nav-home"]}>
        <Link className={styles["nav-text"]} to="/">
          phoiweb.com
        </Link>
      </nav>
      <div className={styles["search-btn"]}>
        <SearchIcon
          className={styles["search-icon"]}
          onClick={() => {
            setIsSearchClicked(!isSearchClicked);
          }}
        />
        <div
          className={classNames(
            styles["text-box-container"],
            isSearchClicked && styles["clicked"]
          )}
        >
          <input
            type="text"
            name="searchText"
            placeholder="search..."
            className={styles["text-box"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
