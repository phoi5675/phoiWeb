import React from 'react';
import { useState } from 'react';
import styles from './Home.module.css';

import markDown from './intro.md';
import Markdown from '../components/Markdown';

const Home = () => {

  const [mdString, setMdString] = useState('init text');
  const [djangoString, setDjangoString] = useState('');

  fetch(markDown)
    .then((response) => response.text())
    .then((text) => {
      setMdString(text);
    })

  fetch('/webpage/')
    .then(response => response.text())
    .then(text => {
      setDjangoString(text);
    })
    .catch(err => console.log(err))

  return (
    <div className={styles.content}>
      <h1>Hello, world!</h1><br/>
      <Markdown markdown={mdString} board="" article=""/>
      <p>{djangoString}</p>
    </div>
  );
}

export default Home;
