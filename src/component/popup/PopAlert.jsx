import React, { Component } from 'react';
import ButtonComponent from '../common/ButtonComponent';
import ImgComponent from '../common/ImgComponent';


const PopAlert = (props) => {

    return (
        <div className={props.open ? 'modal open' : 'modal'}>
            <div onClick={props.close} className='modal_bg'></div>
            <div className="pop_body pop_small">
                <p onClick={props.close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="pop_top">
                    <h2 className="h2_b20">{props.title}</h2>
                </div>
                <div className="pop_cont">
                    {props.children}
                </div>
                <div className="pop_bottom">
                    <ButtonComponent className={'btn_default wht'} txt={'취소'} onClick={props.close} />
                    <ButtonComponent className={'btn_default'} txt={'확인'} onClick={props.link} />
                </div>
            </div>
        </div>
    )
}

export default PopAlert;

