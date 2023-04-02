import React, { Component } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import ImgComponent from '../../component/common/ImgComponent';
import ButtonComponent from '../../component/common/ButtonComponent';
import SelectComponent from '../../component/common/SelectComponent';
import InputComponent from '../../component/common/InputComponent';
import InputZoneComponent from '../../component/common/InputZoneComponent';
import PopSignUpAddress from '../../component/popup/PopSignUpAddress';


const SignUp2 = () => {

    const navigator = useNavigate();
    
    const [signUpPop, setSignUpPop] = useState(false);
    const openSignUpPop = () => {
        setSignUpPop(true);   
    }
    const closeSignupPop = () => {
        setSignUpPop(false);
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
                            <dl className='seq_dl'>
                                <dt>3</dt>
                                <dd>
                                    <span className='call'>관리자정보입력</span>
                                </dd>
                            </dl>
                        </div>
                    </section>
                        
                    <h2 className='signup_title'>회사 정보 입력</h2>
                    <div className="signup_step_form">
                        <div className="form_row form_company_name">
                            <div className="form_title">
                                법인/기업명
                            </div>
                            <div className="form_contents">
                                <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={''} 
                                messClass={'mess'} message={'*존재하지 않는 기업입니다.'} />
                                <ButtonComponent className={'btn_default little grey'} txt={'검색'} onClick={openSignUpPop} />
                            </div>
                        </div>
                        <div className="form_row">
                            <div className="form_title">
                                업종
                            </div>
                            <div className="form_contents">
                                <SelectComponent className={'selector w-100'}>
                                    <option value="" disabled selected>업종</option>
                                    <option value="">농업</option>
                                    <option value="">제조업</option>
                                    <option value="">서비스업</option>
                                    <option value="">물류</option>
                                    <option value="">생산</option>
                                </SelectComponent>
                            </div>
                        </div>
                        <div className="form_row">
                            <div className="form_title">
                                대표자명
                            </div>
                            <div className="form_contents">
                                <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={''} 
                                messClass={'mess'} message={''} />
                            </div>
                        </div>
                        <div className="form_row">
                            <div className="form_title">
                                사업자번호(고유번호)
                            </div>
                            <div className="form_contents">
                                <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={''} 
                                messClass={'mess'} message={''} />
                            </div>
                        </div>
                        <div className="form_row form_business_registration">
                            <div className="form_title">
                                사업자등록증
                            </div>
                            <div className="form_contents">
                                <div className="form_file_upload">
                                    <div className="file_btwrap">
                                        <input type="file" className="file_put" />
                                        <ButtonComponent type={'button'} className={'btn_default bit ltgrey'} txt={'파일첨부'} />
                                    </div>
                                    <div className='file_result m-l-6'>
                                        <p className='p_r14'>hooxipartners_사업자등록증.pdf</p>
                                        <span className='put_check put_delete'>
                                            <ImgComponent src={'del12_circle.svg'} className={'form_file_remove'} />
                                        </span>
                                    </div>
                                </div>
                                <div className="remark_msg">
                                * pdf, jpg, png, gif, bmp 형식의 이미지(10MB 이하)를 업로드해 주세요. <br/>&nbsp;&nbsp;&nbsp;파일명에 마침표(.)가 포함된 경우 업로드 불가합니다.
                                </div>
                            </div>
                        </div>         
                        <div className="form_row form_company_address">
                            <div className="form_title">
                                회사 주소
                            </div>
                            <div className="form_contents">
                                <div className="form_find_address">
                                    <ButtonComponent type={'button'} className={'btn_default bit ltgrey'} txt={'주소찾기'} onClick={''} />
                                    <InputComponent type={'text'} className={'wrput input01'} />
                                    <InputComponent type={'text'} className={'wrput input02'} placeholder={'상세주소'} />
                                </div>
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
                                <InputZoneComponent zoneClass={'put_zone'} type={'text'} inputClass={'wrput'} placeholder={'"-"를 제외하고 입력'} 
                                messClass={'mess'} message={''} />
                            </div>
                        </div>
                    </div>

                    <div className='btzone_between'>
                        <ButtonComponent className={'btn_default wht'} txt={'이전'} onClick={() => navigator('/SignUp1')} />
                        <ButtonComponent className={'btn_default'} txt={'다음'} onClick={() => navigator('/SignUp3')} />
                    </div>

                </article>
            </div>

            <PopSignUpAddress open={signUpPop} close={closeSignupPop} />
        </div>
    );
}

export default SignUp2;

