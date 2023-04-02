import React, { Component } from 'react';
import ButtonCloseComponent from '../common/ButtonCloseComponent';
import ImgComponent from '../common/ImgComponent';


const PopToast = (close) => {

    return (
        <>
            <div className="toast_popup_box">
                <ul className='toast_popup'>
                    <li>
                        <ImgComponent src={'toast_confirm_28px.svg'}  />
                        <p className='toast_text'>(아무개)님의 승인이 완료되었습니다.</p>
                        <ButtonCloseComponent type={'button'} onClick={close} imgName={'close_black_20px.svg'} className={'button_default'} />
                    </li>
                    <li>
                        <ImgComponent src={'toast_notice_28px.svg'}  />
                        <p className='toast_text'>(아무개)님이 반려처리되었습니다.</p>
                        <ButtonCloseComponent type={'button'} onClick={close} imgName={'close_black_20px.svg'} className={'button_default'} />
                    </li>
                    <li>
                        <ImgComponent src={'toast_confirm_28px.svg'}  />
                        <p className='toast_text'>(아무개)님의 승인이 완료되었습니다.</p>
                        <ButtonCloseComponent type={'button'} onClick={close} imgName={'close_black_20px.svg'} className={'button_default'} />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default PopToast;

