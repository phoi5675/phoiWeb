import React from "react";
import styles from './Boards.module.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Boards = () => {
  const [articles, setArticles] = useState([]);
  const { board } = useParams();

  useEffect(() => {
    fetch(`/webpage/boards/${board}/articles`)
      .then(response => {
        return response.text();
      })
      .then(respText => {
        const json = JSON.parse(respText);

        if (Object.keys(json).length > 0){
          const _articles = json.map((article) => {
              return (
                <div key={article.pk}>
                  <p>title : {article.fields.title}</p>
                  <p>date : {article.fields.date}</p>
                  <p>{article.fields.preview_text}</p>
                </div>
              )});
          setArticles(_articles);
        }
        else {
           setArticles([<p key={0}>NO ARTICLES!</p>]);
        }
      })
      .catch(err => console.log(err));
  }, [board]);

  return (
    <div className={styles.header}>
      {articles.map(article => article)}
    </div>
  );
}

export default Boards;
