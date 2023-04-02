import React, { Component } from 'react';
import ButtonComponent from '../common/ButtonComponent';
import ImgComponent from '../common/ImgComponent';


const PopUsersRejection = ({ open, close }) => {
    
    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>
            <div className="pop_body pop_users">
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="pop_top">
                    <h2 className="h2_b20">반려사유</h2>
                </div>
                <div className="pop_cont">
                    <p className='pop_paragraph'>승인에 필요한 정보가 부족합니다.</p>
                    <ul className='user_rejection_list'>
                        <li>재직증명서 누락</li>
                        <li>연락처 불일치</li>
                    </ul>
                </div>
                <div className="pop_bottom">
                    <button onClick={close} className="btn_default wht">취소</button>
                    <button className="btn_default">확인</button>
                </div>
            </div>
        </div>
    )
}

export default PopUsersRejection;

