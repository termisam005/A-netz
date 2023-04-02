import React, { Component } from 'react';
import ButtonComponent from '../common/ButtonComponent';
import ImgComponent from '../common/ImgComponent';


const PopSignUp = ({ open, close }) => {

    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>
            <div className="pop_body pop_small">
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p> 
                <div className="pop_top">
                    <h2 className="h2_b20">인증메일발송</h2>
                </div>
                <div className="pop_cont">
                    <p className='pop_txt'>메일함에서 info@netz.com</p>
                    <p className='pop_txt'>인증 메일의 인증코드를 확인하세요.</p>
                </div>
                <div className="pop_bottom">
                    <ButtonComponent className={'btn_default'} txt={'확인'} onClick={close} />
                </div>
            </div>            
        </div>
    )
}

export default PopSignUp;

