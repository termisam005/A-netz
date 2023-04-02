import React from 'react';
import { useState } from 'react';
import ImgComponent from './ImgComponent';


const CheckOnlyComponent = () => {

    const [checkOnly, setCheckOnly] = useState(false);
    const toggleCheck = () => {
        setCheckOnly(!checkOnly);
    }

    return (
        <p onClick={toggleCheck} className={checkOnly ? 'check_box on' : 'check_box'}>
            <ImgComponent className={'icon'} src={'checkbox.svg'} />
            <ImgComponent className={'icon_on'} src={'checkbox_on.svg'} />
        </p>
    );
};

export default CheckOnlyComponent;
