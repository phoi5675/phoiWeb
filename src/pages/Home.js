import React, { useState } from 'react';
import styles from './Home.module.css';

import markDown from './intro.md';
import Markdown from '../components/Markdown';

const Home = () => {

  const [mdString, setMdString] = useState('init text');

  fetch(markDown)
    .then((response) => response.text())
    .then((text) => {
      setMdString(text);
    })

  console.log("base url : " + process.env.REACT_APP_MARKDOWN_IMAGE_BASE_URL);
  return (
    <div className={styles.content}>
      <h1>Hello, world!</h1><br/>
      <Markdown markdown={mdString} board="" article=""/>
    </div>
  );
}

export default Home;
