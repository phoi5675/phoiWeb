import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";
import { useState } from "react";

const Menu = () => {
  const [boardList, setBoardList] = useState([]);
  const [isBoardVisible, setIsBoardVisible] = useState(false);

  useEffect(() => {
    fetch("/webpage/boards")
      .then((response) => {
        return response.text();
      })
      .then((respText) => {
        const json = JSON.parse(respText);
        return json.map((board) => {
          const to = `/boards/${board.pk}`;
          return (
            <Link key={board.fields.id} className={styles.menu_items} to={to}>
              {board.pk}
            </Link>
          );
        });
      })
      .then((components) => {
        setBoardList(components);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.menu_container}>
      <div
        className={styles.menu}
        onClick={(e) => {
          setIsBoardVisible(!isBoardVisible);
        }}
      >
        <span className={styles.menu_btn}>Boards</span>
        {isBoardVisible ? boardList.map((board) => board) : null}
      </div>
      <Link className={styles.menu} to="/about">
        <span className={styles.menu_btn}>About</span>
      </Link>
    </div>
  );
};

export default Menu;
