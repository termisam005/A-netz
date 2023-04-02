import React from 'react';

const PhotoComponent = ({ children, className, circleClass, onClick }) => {

  return (
    <section className={className} onClick={onClick}>
        <div className={circleClass}>
            {children}
        </div>        
    </section>
  );
};

export default PhotoComponent;
