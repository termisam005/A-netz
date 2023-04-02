import React from 'react';

const InputZoneComponent = ({ zoneClass, type, inputClass, placeholder, value, messClass, message }) => {

    return (
        <div className={zoneClass}>
            <input type={type} className={inputClass} placeholder={placeholder} value={value} />
            <span className="put_check green"></span>
            <p className={messClass}>{message}</p>
        </div>
    );
};

export default InputZoneComponent;
