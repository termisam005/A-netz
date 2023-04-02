import React from 'react';


const DocuComponent = ({ dlClass, title, children, fileClass, fileName }) => {
    
  return (
    <dl className={dlClass}>
        <dt>{title}</dt>
        <dd>
            {children}
            <span className={fileClass}>
                {fileName}
            </span>
        </dd>
    </dl>
  );
};

export default DocuComponent;
