import React, { Component } from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Header from '../../component/layout/Header';
import Aside from '../../component/layout/Aside';
import ImgComponent from '../../component/common/ImgComponent';
import ButtonComponent from '../../component/common/ButtonComponent';
import SelectComponent from '../../component/common/SelectComponent';
import CheckboxComponent from '../../component/common/CheckboxComponent';
import InputComponent from '../../component/common/InputComponent';
import InputZoneComponent from '../../component/common/InputZoneComponent';
import PhotoComponent from '../../component/common/PhotoComponent';
import PopAlert from '../../component/popup/PopAlert';


const Discharge = () => {

    const navigator = useNavigate();

    const [checkBox, setCheckBox] = useState(false);
    const clickCheck = () => {
        setCheckBox(!checkBox);
    }

    const [applyPop, setApplyPop] = useState(false);
    const openApply = () => {
        setApplyPop(true);
    }
    const closeApply = () => {
        setApplyPop(false);
    }

    const [savePop, setSavePop] = useState(false);
    const openSave = () => {
        setSavePop(true);
    }
    const closeSave = () => {
        setSavePop(false);
    }

    //aside toggle 이벤트
    const [toggleState, setToggleState] = useState(false);
    const toggleArrow = () => {
        setToggleState(!toggleState);
    }

    return (
        <div className={toggleState? 'Dash_body respon' : 'Dash_body'}>
            
            <Header headerClass={'header_bg'} />
            <Aside asideClass={toggleState? 'aside respon' : 'aside'} 
            arrowClass={toggleState? 'aside_arrow on' : 'aside_arrow'} onClick={toggleArrow} />

            <div className="contents_inner">
                <article className="inner_top">
                    <div className="dflx_jbet">
                        <div className="inner_title">
                            <h1 className="h1_b24">회원정보 변경</h1>
                        </div>
                    </div>
                </article>

                <form>
                    <fieldset>
                        <article className="contents_body">
                            <h2 class="h2_m20 m-b-16">회사 정보</h2>
                            <div className="member_modify_form">
                                <div className="form_row">
                                    <div className="form_title">
                                        법인/기업명
                                    </div>
                                    <div className="form_contents">
                                        <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={''}
                                        messClass={'mess error'} message={'*Error Message'} />
                                    </div>
                                    <div className="form_title">
                                        업종
                                    </div>
                                    <div className="form_contents row_last_contents">
                                        <SelectComponent className={'selector'}>
                                            <option value="">농업</option>
                                            <option value="">공업</option>
                                            <option value="">제조업</option>
                                            <option value="">서비스업</option>
                                        </SelectComponent>
                                    </div>
                                </div>
                                <div className="form_row">
                                    <div className="form_title">
                                        대표자명
                                    </div>
                                    <div className="form_contents">
                                        <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={''}
                                        messClass={'mess error'} message={'*Error Message'} />
                                    </div>
                                </div>
                                <div className="form_row">
                                    <div className="form_title">
                                        사업자번호(고유번호)
                                    </div>
                                    <div className="form_contents">
                                        <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={''}
                                        messClass={'mess error'} message={'*Error Message'} />
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
                                        * pdf, jpg, png, gif, bmp 형식의 이미지(10MB 이하)를 업로드해 주세요. 파일명에 마침표(.)가 포함된 경우 업로드 불가합니다.
                                        </div>
                                    </div>
                                </div>
                                <div className="form_row form_company_address">
                                    <div className="form_title">
                                        회사 주소
                                    </div>
                                    <div className="form_contents">
                                        <div className="form_find_address">
                                            <ButtonComponent type={'button'} className={'btn_default bit ltgrey'} txt={'주소찾기'} />
                                            <InputComponent type={'text'} className={'wrput input01'} />
                                            <InputComponent type={'text'} className={'wrput input02'} placeholder={'상세주소'} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form_row form_company_phone">
                                    <div className="form_title">
                                        대표전화
                                    </div>
                                    <div className="form_contents">
                                        <div className="form_head_phone">
                                            <SelectComponent className={'selector'} >
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
                                            <div className='w-100'>
                                                <InputZoneComponent zoneClass={'put_zone'} type={'text'} inputClass={'wrput'} placeholder={''} 
                                                messClass={'mess'} message={'*지역번호가 없는 경우, 번호만 입력해주세요.'} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                      
                        </article>

                        <article className="contents_body m-t-48">
                            <h2 class="h2_m20 m-b-16">담당자 정보</h2>
                            <div className="member_modify_form">
                                <div className="form_row form_profile_image">
                                    <div className="form_title">
                                        프로필 사진
                                    </div>
                                    <div className="form_contents">
                                        <PhotoComponent className={'profile_photo'} circleClass={'circle_photo'}>
                                            <ImgComponent src={'photo_img.png'} className={'photo_user'} />
                                        </PhotoComponent>
                                        <ButtonComponent type={'button'} className={'btn_default bit ltgrey m-b-10'} txt={'사진 업로드'} />
                                        <ButtonComponent type={'button'} className={'btn_default bit wht m-b-10'} txt={'삭제'} />
                                    </div>
                                </div>
                                <div className="form_row">
                                    <div className="form_title">
                                        담당자 아이디
                                    </div>
                                    <div className="form_contents">
                                        <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput success'} placeholder={''} value={'Hongildong@gmail.com'}
                                        messClass={'mess error'} message={'*이미 가입되어 있는 이메일입니다.'} />
                                    </div>
                                </div>
                                <div className="form_row">
                                    <div className="form_title">
                                        관리자명
                                    </div>
                                    <div className="form_contents">
                                        <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={''} 
                                        messClass={'mess'} message={'*이미 가입되어 있는 관리자입니다.'} />
                                    </div>
                                </div>
                                <div className="form_row">
                                    <div className="form_title">
                                        비밀번호
                                    </div>
                                    <div className="form_contents">
                                        <div className="put_zone">
                                            <InputZoneComponent zoneClass={'put_zone'} type={'password'} inputClass={'wrput error'} placeholder={'8~15자리 영문/숫자/특수문자 조합'} 
                                            messClass={'mess error'} message={'*비밀번호 형식이 맞지 않습니다.'} />
                                        </div>
                                    </div>
                                    <div className="form_title">
                                        비밀번호 확인
                                    </div>
                                    <div className="form_contents row_last_contents">
                                        <InputZoneComponent zoneClass={'put_zone norm'} type={'password'} inputClass={'wrput success'} placeholder={'비밀번호 확인'}
                                        value={'1234abcd@@@'} messClass={'mess error'} message={'*비밀번호가 맞지 않습니다. 다시 확인해주세요.'} />
                                    </div>
                                </div>
                                <div className="form_row">
                                    <div className="form_title">
                                        담당 부서
                                    </div>
                                    <div className="form_contents">
                                        <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={''} 
                                        messClass={'mess'} message={'*이미 가입되어 있는 이메일입니다.'} />
                                    </div>
                                </div>
                                <div className="form_row form_admin_email">
                                    <div className="form_title">
                                        관리자 이메일
                                    </div>
                                    <div className="form_contents">
                                        <div className='form_email_line'>
                                            <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={''} 
                                            messClass={'mess'} message={''} />
                                            <ButtonComponent type={'button'} className={'btn_srch more'} txt={'인증코드 발송'} />
                                        </div>
                                        <div className="remark_msg m-t-4">
                                            <CheckboxComponent checkID={"checkbox1"} text={'이메일과 동일'} /> 
                                        </div>
                                    </div>
                                </div>

                                <div className="form_row">
                                    <div className="form_title">
                                        인증코드
                                    </div>
                                    <div className="form_contents">
                                        <div className="form_sms_verification">
                                            <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput error'} placeholder={''} 
                                            messClass={'mess error'} message={''} />
                                            <ButtonComponent type={'button'} className={'btn_default little ltgrey'} txt={'확인'} />
                                            <ButtonComponent type={'button'} className={'btn_default little wht'} txt={'재발송'} />
                                            <span className='form_error_msg'>*인증코드가 맞지 않습니다. 다시 확인해주세요.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form_row form_company_phone">
                                    <div className="form_title">
                                        대표전화
                                    </div>
                                    <div className="form_contents">
                                        <div className="form_head_phone inline">
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
                                            <div className='w-100'>
                                                <div className='form_inner_phone'>
                                                    <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} 
                                                    placeholder={'"-"를 제외하고 입력'} messClass={'mess'} message={''} />
                                                    <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} 
                                                    placeholder={'내선번호'} messClass={'mess'} message={''} />
                                                </div>
                                                <div className="remark_msg">
                                                    * 지역번호가 없는 경우, 번호만 입력해주세요.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form_title">
                                        담당자 핸드폰
                                    </div>
                                    <div className="form_contents row_last_contents">
                                        <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={'"-"를 제외하고 입력'} 
                                        messClass={'mess'} message={'*이미 가입되어 있는 번호입니다.'} />
                                    </div>
                                </div>
                            </div>                      
                        </article>

                        <div className="btzone_last">
                            <ButtonComponent type={'button'} className={'btn_default med wht'} txt={'취소'} onClick={openApply} />
                            <ButtonComponent type={'button'} className={'btn_default med'} txt={'저장'} onClick={openSave} />
                        </div>
                    </fieldset>
                </form>
            </div>

            <PopAlert open={applyPop} close={closeApply} title={'회원 정보 변경'}>
                <p className='pop_txt'>수정된 내용이 있습니다.</p>
                <p className='pop_txt'>저장하지 않고 나가시겠습니까?</p>
            </PopAlert>
            <PopAlert open={savePop} close={closeSave} title={'회원 정보 변경'}>
                <p className='pop_txt'>회원 정보 변경이 완료 되었습니다.</p>
            </PopAlert>
        </div>
    );
}

export default Discharge;
