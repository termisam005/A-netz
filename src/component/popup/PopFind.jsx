import React, { Component } from 'react';
import ButtonComponent from '../common/ButtonComponent';
import ImgComponent from '../common/ImgComponent';


const PopFind = ({open, close}) => {

    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>
            <div className="pop_body pop_small">
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="pop_top">
                    <h2 className="h2_b20">아이디/비밀번호 찾기</h2>
                </div>
                <div className="pop_cont">
                    <p className="pop_txt">
                        등록된 이메일로 아이디가 <br/>발송되었습니다.
                    </p>
                </div>
                <div className="pop_bottom">
                    <ButtonComponent className={'btn_default'} txt={'확인'} onClick={close} />
                </div>
            </div>
        </div>
    )
}

export default PopFind;

