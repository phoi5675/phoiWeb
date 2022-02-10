import React from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = ({markdown, board, article, ...props}) => { 
  // get undefined error :(
  const boardPath = `${board}${article}`;
  const resizedImage = (props) => {
    return <img {...props} style={{ maxWidth: "100%" }}></img>;
  }

  return (
      <ReactMarkdown
        transformImageUri={uri =>
          uri.startsWith("http") ? uri :
            `${process.env.REACT_APP_URL}${boardPath}${uri.replace("./", "/")}`
        }
        renders={{image: resizedImage}}
        children={markdown}/>
  );
}

export default Markdown;
