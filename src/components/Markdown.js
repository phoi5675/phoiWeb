import React from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = ({markdown, board, article, ...props}) => { 
  // get undefined error :(
  const boardPath = `${board}${article}`;
  
  return (
      <ReactMarkdown
        transformImageUri={uri =>
          uri.startsWith("http") ? uri :
            `${boardPath}${uri.replace("./", "/")}`
      }>{markdown}</ReactMarkdown>
  );
}

export default Markdown;
