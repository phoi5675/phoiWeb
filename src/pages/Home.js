import React from 'react';
import { useState } from 'react';
import styles from './Home.module.css';

import Markdown from '../components/Markdown';

const Home = () => {

  const [mdString, setMdString] = useState('loading...');

  fetch('/webpage/test/test_title')
    .then((response) => {
      const text = response.text();
      return text;
    })
    .then((text) => {
      setMdString(text);
    })

  return (
    <div className={styles.content}>
      <Markdown markdown={mdString} board="/test" article="/test_title"/>
    </div>
  );
}

export default Home;
