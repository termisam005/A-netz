import React from 'react';
import ImgComponent from './ImgComponent';

const SearchComponent = (props) => {

    function srchPut() {
        let deletor = document.querySelector('.put_delete');
        let srchInput = document.querySelector('.put_srch');
        deletor.style.display = 'flex';
        srchInput.style = 'padding-right:2rem';
    }
    function onDelete() {
        let deletor = document.querySelector('.put_delete');
        let srchInput = document.querySelector('.put_srch');
        srchInput.value = '';
        deletor.style.display = 'none';
        srchInput.style = 'padding-right:1rem';
    }

    return (
        <div className="input_sett">
            {props.children}
            <div className={props.zoneClass}>
                <input type="text" onInput={srchPut} className={props.className} placeholder={props.placeholder} />
                <span className="put_check put_delete" onClick={onDelete}>
                    <ImgComponent src={'del12_circle.svg'} />
                </span>
            </div>
            <button type="button" className="btn_srch">{props.btn_tlt}</button>
        </div>
    );

};

export default SearchComponent;
