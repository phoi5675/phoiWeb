import React from "react";
import styles from "./Article.module.scss";

import Markdown from "../components/Markdown";
import { useParams } from "react-router-dom";

const Article = () => {
  const { useState, useEffect } = React;

  const { board, title } = useParams();
  const [mdString, setMdString] = useState("loading...");

  const boardPath = `/${board}`;
  const titlePath = `/${title}`;
  const url = `/webpage${boardPath}${titlePath}`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        const text = response.text();
        return text;
      })
      .then((text) => {
        setMdString(text);
      });
  }, []);

  return (
    <div className={styles["content"]}>
      <Markdown markdown={mdString} board={boardPath} article={titlePath} />
    </div>
  );
};

export default Article;
