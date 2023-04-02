import React, { Component } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import ButtonComponent from '../common/ButtonComponent';
import ImgComponent from '../common/ImgComponent';
import PhotoComponent from '../common/PhotoComponent';
import PopMemberModify from './PopMemberModify';


const PopMemberInformation = ({open, close}) => {

    const navicator = useNavigate();

    const [memberModifyPop, setMemberModifyPop] = useState(false);
    const openMemberModify = () => {
        setMemberModifyPop(true);
    }
    const closeMemberModify = () => {
        setMemberModifyPop(false);
    }

    return (
        <div className={open ? 'modal trans open' : 'modal trans'}>
            <div onClick={close} className='modal_bg'></div>
            <div className="member_popup_box">
                <div className="pop_body">
                    <div className="member_information">
                        <PhotoComponent className={'member_photo'} circleClass={'circle_photo'}>
                            <ImgComponent src={'photo_img.png'} className={'photo_user'} />
                        </PhotoComponent>
                        <div className="member_text">
                            <div className='member_name'>아무개</div>
                            <div className='member_email'>yelows@ottugi.com</div>
                        </div>
                    </div>
                    <ButtonComponent type={'button'} className={'member_modify'} onClick={openMemberModify} txt={'회원정보변경'} />
                    <ButtonComponent type={'button'} className={'member_logout'} txt={'로그아웃'} onClick={()=>navicator('/main')} />
                </div>
            </div>
            
            <PopMemberModify open={memberModifyPop} close={closeMemberModify} />
        </div>
    )
}

export default PopMemberInformation;

