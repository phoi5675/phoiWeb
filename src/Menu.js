import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import { useState } from 'react';

const Menu = () => { 
  const [boardList, setBoardList] = useState([]);
  const [isBoardVisible, setIsBoardVisible] = useState(false);

  useEffect(() => {
    fetch('/webpage/boards')
      .then(response => {
        return response.text();
      })
      .then(respText => {
        const json = JSON.parse(respText);
        setBoardList(
          json.map((board) => {
            return (
              <li key={board.fields.id}
                className={styles.menu_items}>
                {board.pk}
              </li>);
          }));
      })
      .catch(err => console.log(err));
    }, []);
  
  return (
    <div className={styles.menu_container}>
      <div className={styles.menu}>
        <button className={styles.menu_btn} 
          onClick={(e) => {
            setIsBoardVisible(!isBoardVisible);
          }}>Boards</button>
        {
          isBoardVisible ?
          <ul>{boardList}</ul>
          : null
        }
      </div>
      <Link className={styles.menu} to='/about'>
        <p className={styles.menu_btn}>About</p>
      </Link>
    </div>
  );
};

export default Menu;