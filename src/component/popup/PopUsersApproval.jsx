import React, { Component } from 'react';
import { useState } from 'react';
import ButtonComponent from '../common/ButtonComponent';
import ImgComponent from '../common/ImgComponent';
import PopUsersRejection from "./PopUsersRejection"


const PopUsersApproval = ({ open, close }) => {

    const [userRejectionPop, setRejectionPop] = useState(false);
    const openUserRejection = () => {
        setRejectionPop(true);
    }
    const closeUserRejection = () => {
        setRejectionPop(false);
    }
    
    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>
            <div className="pop_body pop_users_confirm">
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="pop_top">
                    <h2 className="h2_b20">이용자 확인</h2>
                </div>
                <div className="pop_cont">
                    <ul className='user_approval_list border_list'>
                        <li>
                            <span className='text_01'>회사명</span>
                            <span className='text_02'>오뚜기</span>
                        </li>
                        <li>
                            <span className='text_01'>조직명</span>
                            <span className='text_02'>서울공장</span>
                        </li>
                        <li>
                            <span className='text_01'>담당자 이메일</span>
                            <span className='text_02'>baik@widmay.com</span>
                        </li>
                        <li className='user-approval_name'>
                            <span className='text_01'>담당자명</span>
                            <span className='text_02'>최우식</span>
                        </li>
                        <li>
                            <span className='text_01'>관리부서</span>
                            <span className='text_02'>관리부</span>
                        </li>                        
                        <li>
                            <span className='text_01'>직급/지위</span>
                            <span className='text_02'>과장</span>
                        </li>
                        <li>
                            <span className='text_01'>내선번호</span>
                            <span className='text_02'>1234-5678(06)</span>
                        </li>
                        <li>
                            <span className='text_01'>담당자 연락처</span>
                            <span className='text_02'>010-1234-5678</span>
                        </li>
                        <li className='additional_file'>
                            <span className='text_01'>첨부파일</span>
                            <a href="#" className='text_02'>재직증명서.pdf</a>
                        </li>
                    </ul>
                </div>
                <div className="pop_bottom">
                    <button onClick={openUserRejection} className="btn_default error">반려</button>
                    <button className="btn_default">확인</button>
                </div>
            </div>

            <PopUsersRejection open={userRejectionPop} close={closeUserRejection} />
        </div>
    )
}

export default PopUsersApproval;

