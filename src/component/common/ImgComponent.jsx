import React from 'react';

const ImgComponent = ({ src, onClick, style, className }) => {
  return (
    <img
      className={className}
      style={style}
      src={process.env.PUBLIC_URL + '/images/' + src}
      alt={'img'}
      onClick={onClick}
    />
  );
};

export default ImgComponent;
