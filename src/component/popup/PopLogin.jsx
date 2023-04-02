import React, { Component, Fragment } from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import ButtonComponent from '../common/ButtonComponent';
import ImgComponent from '../common/ImgComponent';
import InputComponent from '../common/InputComponent';
import PopFind from './PopFind';


const PopLogin = ({open, close}) => {

    const navigator = useNavigate();

    const [logWrap, setLogWrap] = useState(false);
    const openLogWrap = () => {
        setLogWrap(true);
    };

    const [tabState, setTabState] = useState(1);
    const clickTab = (index) => {
        setTabState(index);
    };

    const [alertPop, setAlertPop] = useState(false);
    const openAlert = () => {
        setAlertPop(true);
    };
    const closeAlert = () => {
        setAlertPop(false);
    };
    
    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>
            <div className="pop_body pop_login">
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <article className={logWrap ? 'login_wrap' : 'login_wrap on'}>
                    <div className="pop_top pop_top_cent">
                        <h1 className="h1_b24">로그인</h1>
                    </div>
                    <form>
                    <section className='login_cont'>
                        <div className='put_zone'>
                            <InputComponent type={'text'} className={'wrput large'} placeholder={'E-mail'} />
                            <p className='mess error'>*Error Message</p>
                        </div>
                        <div className='put_zone'>
                            <InputComponent type={'password'} className={'wrput large'} placeholder={'비밀번호'} />
                            <p className='mess error'>*Error Message</p>
                        </div>
                        {/* <div className='login_line dflx_ac_jbet'>
                                <div className='dflx_ac'>
                                    <p className='p_r14' onClick={openLogWrap}>아이디</p>
                                    <span className='pipe'>|</span>
                                    <p className='p_r14' onClick={openLogWrap}>비밀번호 찾기</p>
                                </div>
                                <p className='p_r14' onClick={() => navigator('/SignUp1')}>회원가입</p>
                            </div>*/}
                        <ButtonComponent type={'submit'} className={'btn_default med w-100'} txt={'로그인'} onClick={() => navigator('/Dashboard1')} />
                    </section>
                    </form>
                </article>
                <article className={logWrap ? 'login_wrap on' : 'login_wrap'}>
                    <div className="pop_top pop_top_cent">
                        <h1 className="h1_b24">아이디/비밀번호 찾기</h1>
                    </div>
                    <div className='tabt_line idpass'>
                        <ButtonComponent type={'button'} className={tabState === 1 ? "tab_nemo on" : "tab_nemo"} txt={'아이디찾기'} onClick={() => clickTab(1)} />
                        <ButtonComponent type={'button'} className={tabState === 2 ? "tab_nemo on" : "tab_nemo"} txt={'비밀번호찾기'} onClick={() => clickTab(2)} />
                    </div>
                    <form>
                    <section className={tabState === 1 ? "idpass_cont on" : "idpass_cont"}>
                        <div className='put_zone'>
                            <InputComponent type={'text'} className={'wrput large'} placeholder={'이름'} />
                            <p className='mess error'>*Error Message</p>
                        </div>
                        <div className='put_zone'>
                            <InputComponent type={'text'} className={'wrput large'} placeholder={'이메일 주소'} />
                            <p className='mess error'>*Error Message</p>
                        </div>
                        <ButtonComponent type={'button'} className={'btn_default med w-100'} txt={'아이디 찾기'} onClick={openAlert} />
                        <div className='idpass_exp'>
                            <p className='p_r12'>넷지에 가입했던 이메일로 아이디를 발송해 드립니다.
                            입력하신 이메일 주소는 회원 정보에 등록된 이메일 주소와 같아야 합니다.</p>
                        </div>
                    </section>
                    <section className={tabState === 2 ? "idpass_cont on" : "idpass_cont"}>
                        <div className='put_zone'>
                            <InputComponent type={'text'} className={'wrput large'} placeholder={'아이디'} />
                            <p className='mess error'>*Error Message</p>
                        </div>
                        <div className='put_zone'>
                            <InputComponent type={'text'} className={'wrput large'} placeholder={'이메일 주소'} />
                            <p className='mess error'>*Error Message</p>
                        </div>
                        <ButtonComponent type={'button'} className={'btn_default med w-100'} txt={'비밀번호 찾기'} onClick={openAlert} />
                        <div className='idpass_exp'>
                            <p className='p_r12'>넷지에 가입했던 이메일로 임시 비밀번호를 발송해 드립니다.
                            입력하신 이메일 주소는 회원 정보에 등록된 이메일 주소와 같아야 합니다.</p>
                        </div>
                    </section>
                    </form>
                </article>
            </div>
            <PopFind open={alertPop} close={closeAlert} />
        </div>
    )
}

export default PopLogin;


