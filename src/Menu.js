import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import { useState } from 'react';

const Menu = () => { 
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    fetch('/webpage/boards')
      .then(response => {
        return response.text();
      })
      .then(respText => {
        const json = JSON.parse(respText);
        setBoardList(
          json.map((board) => {
            console.log(board);
            return <li key={board.fields.id}>{board.fields.storage_path}</li>;
          }));
      })
      .catch(err => console.log(err));
    }, []);
  
  return (
    <div className={styles.menu_container}>
      <ul>{boardList}</ul>
      <Link className={styles.menu} to='/board'>Boards</Link>
      <Link className={styles.menu} to='/about'>About</Link>
    </div>
  );
};

export default Menu;