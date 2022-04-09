import React, { useState } from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.content}>
      <h1>About phoi</h1>
      <p>강민재</p>
      <p>phoi5675@gmail.com</p>
      <a href="https://github.com/phoi5675" className={styles.link}>
        Github
      </a>
      <br />
    </div>
  );
};

export default About;
