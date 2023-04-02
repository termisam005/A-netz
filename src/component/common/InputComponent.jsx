import React from 'react';

const InputComponent = ({ type, className, placeholder, value, disabled }) => {

    return (
        <input type={type} className={className} placeholder={placeholder} value={value} disabled={disabled} />
    );
};

export default InputComponent;
