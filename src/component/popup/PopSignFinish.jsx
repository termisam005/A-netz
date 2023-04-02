import React, { Component } from 'react';
import { useNavigate } from 'react-router';
import ImgComponent from '../common/ImgComponent';
import ButtonComponent from '../common/ButtonComponent';


const PopSignFinish = ({ open, close }) => {

    const navigator = useNavigate();

    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>
            
            <div className="pop_body pop_small">
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p> 
                <div className="pop_top">
                    <h2 className="h2_b20">알림</h2>
                </div>
                <div className="pop_cont">
                    <p className='pop_txt'>가입에 필요한 정보가 다 입력되지 않았습니다.</p>
                    <p className='pop_txt'>다시 한번 확인해주세요.</p>
                </div>
                <div className="pop_bottom">
                    <ButtonComponent className={'btn_default'} txt={'확인'} onClick={close} />
                </div>
            </div>

            <div className="pop_body pop_small">
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p> 
                <div className="pop_top">
                    <h2 className="h2_b20">가입신청완료</h2>
                </div>
                <div className="pop_cont signup_success">
                    <p className='pop_txt'>가입 신청이 완료되었습니다.<br/>
                    운영자의 승인 이후 사용 가능하며 <br/>
                    승인까지 약 <span className='text_point'>2~3일</span> 소요됩니다.</p>
                    <p className='remark_msg'>*승인 및 반려 처리 결과는 메일로 전송됩니다.</p>
                </div>
                <div className="pop_bottom">
                    <ButtonComponent className={'btn_default'} txt={'확인'} onClick={() => navigator('/main')} />
                </div>
            </div>

        </div>
    )
}

export default PopSignFinish;

