import React from 'react';
import ImgComponent from './ImgComponent';

const ButtonPlusComponent = ({ type, onClick, className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
        <span className='img_plus'>
            <ImgComponent src={'plus.png'} />
        </span>
    </button>
  );
};

export default ButtonPlusComponent;
