import react from "react";

const Image = (props) => {
  const { src, className, alt } = props;
  return src && <img src={src} className={className} alt={alt} />;
};
