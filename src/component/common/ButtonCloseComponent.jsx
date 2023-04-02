import React from 'react';
import ImgComponent from '../common/ImgComponent';

const ButtonComponent = ({ type, id, className, onClick, imgName}) => {
  return (
    <button type={type} id={id} className={className} onClick={onClick}>
        <ImgComponent src={imgName} />    
    </button>
  );
};

export default ButtonComponent;
