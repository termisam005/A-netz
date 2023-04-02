import React, { Component } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonComponent from '../common/ButtonComponent';
import SelectComponent from '../common/SelectComponent';
import InputComponent from '../common/InputComponent';
import InputZoneComponent from '../common/InputZoneComponent';


const PopManagerEnroll = ({ open, close }) => {

    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>

            <div className="pop_body pop_medium_new">
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">당당자 등록</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain top'>
                        <div className="sign_row">
                            <div className="sign_title">
                                아이디
                            </div>
                            <div className="sign_write">
                                <InputZoneComponent zoneClass={'put_zone'} type={'text'} inputClass={'wrput error'} placeholder={''} value={'sol_netz01'}
                                messClass={'mess error'} message={'*등록되어 있는 아이디 입니다.'} />
                                <ButtonComponent className={'btn_default little ltgrey'} txt={'파일첨부'} onClick={''} />
                            </div>
                        </div>
                        <div className="sign_row">
                            <div className="sign_title">
                                담당자명
                            </div>
                            <div className="sign_write">
                                <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={''} 
                                messClass={'mess error'} message={''} />
                            </div>
                        </div>
                        <div className="sign_row">
                            <div className="sign_title">
                                비밀번호
                            </div>
                            <div className="sign_write">
                                <InputZoneComponent zoneClass={'put_zone norm'} type={'password'} inputClass={'wrput success'} placeholder={'8~15자리 영문/숫자/특수문자 조합'} 
                                messClass={'mess error'} message={'*존재하지 않는 이름입니다.'} />
                            </div>
                        </div>
                        <div className="sign_row">
                            <div className="sign_title">
                                비밀번호 확인
                            </div>
                            <div className="sign_write">
                                <InputZoneComponent zoneClass={'put_zone'} type={'password'} inputClass={'wrput error'} placeholder={''} value={'123456'}
                                messClass={'mess error'} message={'*비밀번호가 맞지 않습니다.'} />
                            </div>
                        </div>
                        <div className="sign_row">
                            <div className="sign_title">
                                근무부서
                            </div>
                            <div className="sign_write">
                                <InputZoneComponent zoneClass={'put_zone'} type={'text'} inputClass={'wrput'} placeholder={''} 
                                messClass={'mess error'} message={''} />
                            </div>
                        </div>
                        <div className="sign_row">
                            <div className="sign_title">
                                이메일
                            </div>
                            <div className="sign_write">
                                <InputZoneComponent zoneClass={'put_zone'} type={'text'} inputClass={'wrput'} placeholder={''} 
                                messClass={'mess error'} message={''} />
                            </div>
                        </div>
                        <div className="sign_row">
                            <div className="sign_title">
                                연락처
                            </div>
                            <div className="sign_write">
                                <div className='sign_tell'>
                                    <SelectComponent className={'selector'}>
                                        <option value="">지역번호</option>
                                        <option value="">없음</option>
                                        <option value="">010</option>
                                        <option value="">02</option>
                                        <option value="">031</option>
                                        <option value="">051</option>
                                    </SelectComponent>
                                    <InputComponent className={'wrput'} />
                                    <InputComponent className={'wrput'} placeholder={'내선번호'} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='popn_contain bottom'>
                        <div className="sign_row">
                            <div className="sign_title">
                                사업장명
                            </div>
                            <div className="sign_write">
                                <div className='label_wrap'>
                                    <span className='label bldark'>본관</span>
                                    <span className='label'>서울1공장</span>
                                    <span className='label'>서울2공장</span>
                                    <span className='label bldark'>부산공장</span>
                                    <span className='label bldark'>세종R&D센터</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="popn_bottom">
                    <ButtonComponent onClick={close} className="btn_default wht" txt={'닫기'} />
                    <ButtonComponent onClick={close} className="btn_default" txt={'등록'} />
                </div>
            </div>

        </div>
    )
}

export default PopManagerEnroll;

