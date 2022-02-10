import React from 'react';
import { useState } from 'react';
import styles from './Home.module.css';

import Markdown from '../components/Markdown';

const Home = () => {

  const [mdString, setMdString] = useState('init text');

  fetch('/webpage/test/test_title/')
    .then((response) => response.text())
    .then((text) => {
      setMdString(text);
    })

  return (
    <div className={styles.content}>
      <h1>Hello, world!</h1><br/>
      <Markdown markdown={mdString} board="test/" article="test_title"/>
    </div>
  );
}

export default Home;
