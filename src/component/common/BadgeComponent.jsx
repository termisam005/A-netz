import React from 'react';

const BadgeComponent = ({ className, onClick, txt }) => {
    
  return (
    <span className={className}  onClick={onClick}>{txt}</span>
  );
};

export default BadgeComponent;
