import React, { Component } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import ImgComponent from '../common/ImgComponent';
import PopLogin from '../popup/PopLogin';


const MainHeader = ({header_class}) => {

    const navigator = useNavigate();

    const [loginPop, setLoginPop] = useState(false);
    const openLogin = () => {
        setLoginPop(true);
    }
    const closeLogin = () => {
        setLoginPop(false);
    }

    return (
        <div className='header_bg trans'>
            <div className={header_class}>
                <article className="header_in">
                    <section className="header_left">
                        <h1 className='header_logo'>
                            <a onClick={() => navigator('/')}>
                                <ImgComponent src={'logo_netz.png'} className='logo_wh' />
                                <ImgComponent src={'logo_netz_color.png'} className='logo_color' />
                            </a>
                        </h1>
                        <h2 className='header_title'>탄소배출관리 시스템</h2>
                    </section>
                    <section className="header_right">
                        <a className='btn_join btn_login' onClick={openLogin}>로그인</a>
                        <a className='btn_join btn_sign' onClick={() => navigator('/SignUp1')}>회원가입</a>
                    </section>
                </article>
            </div>
            <PopLogin open={loginPop} close={closeLogin} />
        </div>
    );
}

export default MainHeader;
