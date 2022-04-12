import React from "react";
import { useState } from "react";
import styles from "./Home.module.scss";

import Markdown from "../components/Markdown";

const Home = () => {
  return (
    <div className={styles["content"]}>
      <p>Hello, World!</p>
      <p>안녕하세요. phoiweb 입니다</p>
    </div>
  );
};

export default Home;
