import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Home.module.css';

import markDown from './intro.md';
import { PAGE_ROOT } from '../config';

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
      <ReactMarkdown
        transformImageUri={uri =>
          uri.startsWith("http") ? uri : `${PAGE_ROOT}${uri.replace("./", "/")}`
        }>{mdString}</ReactMarkdown>
    </div>
  );
}

export default Home;
