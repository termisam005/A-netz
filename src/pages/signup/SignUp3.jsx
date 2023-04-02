import React, { Component } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import ImgComponent from '../../component/common/ImgComponent';
import ButtonComponent from '../../component/common/ButtonComponent';
import SelectComponent from '../../component/common/SelectComponent';
import InputComponent from '../../component/common/InputComponent';
import InputZoneComponent from '../../component/common/InputZoneComponent';
import CheckboxComponent from '../../component/common/CheckboxComponent';
import PopSignUp from '../../component/popup/PopSignUp';
import PopSignFinish from '../../component/popup/PopSignFinish';
import PopAlert from '../../component/popup/PopAlert';


const SignUp2 = () => {

    const navigator = useNavigate();
    
    const [signUpPop, setSignUpPop] = useState(false);
    const openSignUpPop = () => {
        setSignUpPop(true);   
    }
    const closeSignupPop = () => {
        setSignUpPop(false);
    }

    const [finishPop, setFinishPop] = useState(false);
    const openFinishPop = () => {
        setFinishPop(true);   
    }
    const closeFinishPop = () => {
        setFinishPop(false);
    }


    return (
        <div className="Sign_body">

            <div className="Sign_center">
                <article className='sign_top'>
                    <div className='tac'>
                        <h1><ImgComponent src={'logo_netz155.png'} /></h1>
                    </div>
                </article>
                <article className="sign_contents">
                    <section className='sign_sequence'>
                        <div className='p-r-16'>
                            <h1 className='h1_b24'>기업관리자 회원가입</h1>
                        </div>
                        <div className='sequence_cont'>
                            <dl className='seq_dl on'>
                                <dt>1</dt>
                                <dd>
                                    <span className='call'>약관동의</span>
                                    <span className='line'></span>
                                </dd>
                            </dl>
                            <dl className='seq_dl on'>
                                <dt>2</dt>
                                <dd>
                                    <span className='call'>회사정보입력</span>
                                    <span className='line'></span>
                                </dd>
                            </dl>
                            <dl className='seq_dl on'>
                                <dt>3</dt>
                                <dd>
                                    <span className='call'>관리자정보입력</span>
                                </dd>
                            </dl>
                        </div>
                    </section>
                        
                    <h2 className='signup_title'>주 관리자 정보 입력</h2>
                    <div className="signup_step_form">
                        <div className="form_row form_admin_id">
                            <div className="form_title">
                                관리자 아이디
                            </div>
                            <div className="form_contents">
                                <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput success'} placeholder={''} value={'netz@net.com'}
                                messClass={'mess'} message={'*이미 가입되어 있는 이메일입니다.'} />
                                <ButtonComponent className={'btn_default bit ltgrey'} txt={'중복확인'} />
                            </div>
                        </div>
                        <div className="form_row">
                            <div className="form_title">
                                관리자명
                            </div>
                            <div className="form_contents">
                                <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={''} 
                                messClass={'mess'} message={''} />
                            </div>
                        </div>
                        <div className="form_row">
                            <div className="form_title">
                                비밀번호
                            </div>
                            <div className="form_contents">
                                <InputZoneComponent zoneClass={'put_zone norm'} type={'password'} inputClass={'wrput'} placeholder={'8~15자리 영문/숫자/특수문자 조합'}
                                messClass={'mess error'} message={'*비밀번호 형식이 맞지 않습니다.'} />
                            </div>
                        </div>
                        <div className="form_row">
                            <div className="form_title">
                                비밀번호 확인
                            </div>
                            <div className="form_contents">
                                <InputZoneComponent zoneClass={'put_zone'} type={'password'} inputClass={'wrput error'} placeholder={'비밀번호 확인'}
                                value={'123456'} messClass={'mess error'} message={'*비밀번호가 맞지 않습니다. 다시 확인해주세요.'} />
                            </div>
                        </div>
                        <div className="form_row">
                            <div className="form_title">
                                담당 부서
                            </div>
                            <div className="form_contents">
                                <InputZoneComponent zoneClass={'put_zone norm'} type={'password'} inputClass={'wrput'} placeholder={''}
                                messClass={'mess error'} message={'*에러 메시지입니다.'} />
                            </div>
                        </div>
                        <div className="form_row form_admin_email">
                            <div className="form_title">
                                관리자 이메일
                            </div>
                            <div className="form_contents">
                                <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={''}
                                messClass={'mess error'} message={'*에러 메시지입니다.'} />
                                <ButtonComponent className={'btn_srch more'} txt={'인증코드 발송'} onClick={openSignUpPop} />
                                <div className="remark_msg">
                                    <CheckboxComponent checkID={"checkbox1"} text={'이메일과 동일'} /> 
                                </div>
                            </div>
                        </div>
                        <div className="form_row form_sms_verification">
                            <div className="form_title">
                                인증코드
                            </div>
                            <div className="form_contents">
                                <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={''}
                                messClass={'mess error'} message={'*에러 메시지입니다.'} />
                                <ButtonComponent className={'btn_default little ltgrey'} txt={'확인'}  />
                                <ButtonComponent className={'btn_default little wht'} txt={'재발송'}  />
                            </div>
                        </div>
                        <div className="form_row form_signup_phone">
                            <div className="form_title">
                                대표전화
                            </div>
                            <div className="form_contents">
                                <SelectComponent className={'selector'}>
                                    <option value="" disabled selected>지역번호</option>
                                    <option value="">02</option>
                                    <option value="">031</option>
                                    <option value="">032</option>
                                    <option value="">033</option>
                                    <option value="">041</option>
                                    <option value="">042</option>
                                    <option value="">043</option>
                                    <option value="">044</option>
                                    <option value="">051</option>
                                    <option value="">052</option>
                                    <option value="">053</option>
                                    <option value="">054</option>
                                    <option value="">055</option>
                                    <option value="">061</option>
                                    <option value="">062</option>
                                    <option value="">063</option>
                                    <option value="">064</option>
                                </SelectComponent>
                                <InputComponent type={'text'} className={'wrput input01'} placeholder={'"-"를 제외하고 입력'} />
                                <InputComponent type={'text'} className={'wrput input02'} placeholder={'내선번호'} />
                                <div className="remark_msg">
                                * 지역번호가 없는 경우, 번호만 입력해주세요.
                                </div>
                            </div>
                        </div>
                        <div className="form_row">
                            <div className="form_title">
                                담당자 핸드폰
                            </div>
                            <div className="form_contents">
                                <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={'"-"를 제외하고 입력'}
                                messClass={'mess error'} message={'*에러 메시지입니다.'} />
                            </div>
                        </div>
                    </div>

                    <div className='btzone_between'>
                        <ButtonComponent className={'btn_default wht'} txt={'이전'} onClick={() => navigator('/SignUp2')} />
                        <ButtonComponent className={'btn_default'} txt={'완료'} onClick={openFinishPop} />
                    </div>

                </article>
            </div>

            <PopSignUp open={signUpPop} close={closeSignupPop} />
            <PopSignFinish open={finishPop} close={closeFinishPop} />
        </div>
    );
}

export default SignUp2;

