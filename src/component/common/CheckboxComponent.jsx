import React from 'react';
import { useState } from 'react';

const CheckboxComponent = ({ checkID, text }) => {
    const [checkBox, checkboxProp] = useState(false);
    const clickCheck = () => {
        checkboxProp(!checkBox);
    }

    return (
        <>
            <div className='custom_checkbox'>
                <input type={'checkbox'} id={checkID} />
                <label htmlFor={checkID} onClick={clickCheck} className={checkBox ? 'on' : ''}>
                    {text}
                </label>
            </div>
        </>
    );
};

export default CheckboxComponent;
