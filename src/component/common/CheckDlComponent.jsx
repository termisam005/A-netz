import React, { Component } from 'react';
import { useState } from 'react';
import CheckComponent from './CheckComponent';


const CheckDlComponent = (props) => {

    const [checkBox, setCheckBox] = useState(false);
    const clickCheck = () => {
        setCheckBox(!checkBox);
    }

    return (
        <dl className='check_dl' onClick={clickCheck}>
            <dt>
                <CheckComponent className={checkBox ? 'check_box on' : 'check_box'} />
            </dt>
            <dd>
                {props.children}
            </dd>
        </dl>
    )
}

export default CheckDlComponent;

