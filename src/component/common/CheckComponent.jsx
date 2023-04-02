import React from 'react';
import ImgComponent from './ImgComponent';

const CheckComponent = ({className}) => {
  return (
    <p className={className}>
        <ImgComponent className={'icon'} src={'checkbox.svg'} />
        <ImgComponent className={'icon_on'} src={'checkbox_on.svg'} />
    </p>
  );
};

export default CheckComponent;
