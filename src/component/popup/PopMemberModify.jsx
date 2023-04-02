import React, { Component } from 'react';
import { useNavigate } from 'react-router';
import ButtonComponent from '../common/ButtonComponent';
import ImgComponent from '../common/ImgComponent';
import InputComponent from '../common/InputComponent';


const PopMemberModify = ({ open, close }) => {

    const navigator = useNavigate();
    
    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>
            <div className="pop_body pop_users">
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p> 
                <div className="pop_top">
                    <h2 className="h2_b20">회원 정보 변경</h2>
                </div>
                <div className="pop_cont">
                    <p className=''>회원 정보 변경을 원하실 경우<br/>
                    본인확인을 위해 비밀번호를 한번 더 입력해주세요.</p>
                    <ul className='modify_confirm_list border_list'>
                        <li>
                            <span className='modify_password_title'>아이디</span>
                            <span className='modify_password_data'>yelows@ottugi.com</span>
                        </li>
                        <li>
                            <span className='modify_password_title'>비밀번호</span>
                            <span className='modify_password_data'>
                                <InputComponent type={'password'} className={'wrput'} />
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="pop_bottom">
                    <ButtonComponent onClick={close} className={'btn_default wht'} txt={'취소'} />
                    <ButtonComponent onClick={()=>navigator('/MemberModify')} className={'btn_default'} txt={'확인'} />
                </div>
            </div>
        </div>
    )
}

export default PopMemberModify;

