import React from "react";
import styles from "./Boards.module.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Boards = () => {
  const [articles, setArticles] = useState([]);
  const { board } = useParams();
  const loadingText = "loading...";

  useEffect(() => {
    fetch(`/webpage/boards/${board}/articles`)
      .then((response) => {
        return response.text();
      })
      .then((respText) => {
        const json = JSON.parse(respText);

        if (Object.keys(json).length > 0) {
          const _articles = json.map((article) => {
            return <Article key={article.pk} article={article} />;
          });
          setArticles(_articles);
        } else {
          setArticles([<p key={0}>NO ARTICLES!</p>]);
        }
      })
      .catch((err) => console.log(err));
  }, [board]);

  return (
    <div className={styles.container}>
      <p className={styles.header}>{board}</p>
      <div>
        {articles.length === 0
          ? loadingText
          : articles.map((article) => article)}
      </div>
    </div>
  );
};

export default Boards;

const Article = ({ article }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr.replace("T", " "));
    return (
      `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ` +
      `${date.getHours()}:${date.getMinutes()}`
    );
  };
  return (
    <div className={styles.article_container}>
      <Link
        className={styles.article_link}
        to={`/${article.fields.board_name}/${article.fields.title}`}
        board={article.fields.board_name}
        title={article.fields.title}
      >
        <p className={styles.article_title}>{article.fields.title}</p>
        <p className={styles.article_date}>{formatDate(article.fields.date)}</p>
        <p className={styles.article_preview}>{article.fields.preview_text}</p>
      </Link>
    </div>
  );
};
