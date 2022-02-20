import React, { useState } from "react";
import styles from "./About.module.css";

const About = () => {
  const img1 = require('../assets/img_1.jpeg');
  const img2 = require('../assets/img_2.jpeg');
  const [displayed, setDisplayed] = useState(img1);

  return (
    <div className={styles.content}>
      <h1>About phoi</h1>
      <p>강민재</p>
      <p>phoi5675@gmail.com</p>
      <a href="https://github.com/phoi5675"
        className={styles.link}>Github</a>
      <br/>
      <img
        src={displayed}
        onClick={() => {
          displayed === img1 ? setDisplayed(img2) : setDisplayed(img1);
        }}
        alt="myPic"/>
    </div>
  );
};

export default About;
