import React from 'react';
import ImgComponent from './ImgComponent';


const FileResultComponent = ({ resultClass, txtClass, file, onClick }) => {
    
  return (
    <div className={resultClass}>
        <p className={txtClass}>{file}</p>
        <span className='put_check put_delete' onClick={onClick}>
            <ImgComponent src={'del12_circle.svg'} />
        </span>
    </div>
  );
};

export default FileResultComponent;
