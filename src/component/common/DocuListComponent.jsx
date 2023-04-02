import React from 'react';
import ButtonComponent from './ButtonComponent';


const DocuListComponent = ({ listClass, dlClass, title, children, fileClass, fileName, buttonClass, buttonTxt }) => {
    
  return (
    <div className={listClass}>
        <dl className={dlClass}>
            <dt>{title}</dt>
            <dd>
                {children}
                <span className={fileClass}>
                    {fileName}
                </span>
            </dd>
        </dl>
        <ButtonComponent className={buttonClass} txt={buttonTxt} onClick={''} />
    </div>
  );
};

export default DocuListComponent;
