import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';

const SignUpAddressList = ({ listName, listItem, }) => {


    const [resultCheck, resultCheckProp] = useState(false);
    const handleClick = event => {
        resultCheckProp(resultCheck =>!resultCheck);
    };

    return (
        <>
            <li onClick={handleClick} className={resultCheck ? 'on' : ''}>
                <div className="result_text">
                    <div className="result_text01">
                        {listName}                    
                    </div>
                    <div className="result_text02">
                        {listItem}                    
                    </div>
                </div>
                <div className="list_checked">
                    <ImgComponent src={'check_circle_green.svg'} />
                </div>
            </li>
        </>
    );
};

export default SignUpAddressList;
