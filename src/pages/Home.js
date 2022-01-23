import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Home.module.css';

import markDown from './intro.md';

const Home = () => {

  const [mdString, setMdString] = useState('init text');

  fetch(markDown)
    .then((response) => response.text())
    .then((text) => {
      setMdString(text);
    })

  return (
    <div className={styles.content}>
      <h1>Hello, world!</h1><br/>
      <ReactMarkdown>{mdString}</ReactMarkdown>
    </div>
  );
}

export default Home;