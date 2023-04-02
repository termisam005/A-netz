import React from "react";
import { useState } from "react";
import ImgComponent from "../component/common/ImgComponent";
import ButtonComponent from "../component/common/ButtonComponent";
import ButtonCloseComponent from '../component/common/ButtonCloseComponent';
import InputComponent from "../component/common/InputComponent";
import InputZoneComponent from "../component/common/InputZoneComponent";
import SearchComponent from "../component/common/SearchComponent";
import SelectComponent from "../component/common/SelectComponent";
import CheckDlComponent from "../component/common/CheckDlComponent";
import CheckOnlyComponent from "../component/common/CheckOnlyComponent";
import CheckboxComponent from "../component/common/CheckboxComponent";
import PhotoComponent from '../component/common/PhotoComponent';


const Kit = () => {

    //프로필 팝업
    const [profilePop, setProfilePop] = useState(false);
    const openProfile = () => {
        setProfilePop(true);
    }
    const closeProfile = () => {
        setProfilePop(false);
    }

    return (
        <div className="kit_bg">
            <article className="kit_center">
                <div className="kit_wrap">

                    <section className="kit_sett w-30">
                        <div className="kit_top">
                            <h1>Typography</h1>
                        </div>
                        <div className="kit_cont">
                            <div className="m-b-25">
                                <h1 className="h1_b24">스포카 한 산스 (Bold/24px)</h1>
                            </div>
                            <div className="m-b-25">
                                <h2 className="h2_b20">스포카 한 산스 (Bold/20px)</h2>
                            </div>
                            <div className="m-b-25">
                                <h2 className="h2_m20">스포카 한 산스 (Medium/20x)</h2>
                            </div>
                            <div className="m-b-25">
                                <h3 className="h3_b16">스포카 한 산스 (Bold/16px)</h3>
                            </div>
                            <div className="m-b-25">
                                <h3 className="h3_m16">스포카 한 산스 (Medium/16px)</h3>
                            </div>
                            <div className="m-b-25">
                                <h4 className="h4_m14">스포카 한 산스 (Medium/14px)</h4>
                            </div>
                            <div className="m-b-25">
                                <p className="p_r14">스포카 한 산스 (Regular/14px)</p>
                            </div>
                            <div>
                                <p className="p_r12">스포카 한 산스 (Regular/12px)</p>
                            </div>
                        </div>
                    </section>

                    <section className="kit_sett w-65">
                        <div className="kit_top">
                            <h1>Input Field</h1>
                        </div>
                        <div className="kit_cont">
                            <div className="dflx_jbet">
                                <div className="w-40">
                                    <div className="input_sett m-b-25">
                                        <div className="put_zone">
                                            <input type="text" className="wrput" placeholder="Placeholder" />
                                        </div>
                                        <span className="sp_name pink">Defualt</span>
                                    </div>
                                    <div className="input_sett m-b-25">
                                        <div className="put_zone">
                                            <input type="text" className="wrput on" placeholder="" />
                                        </div>
                                        <span className="sp_name pink">Active</span>
                                    </div>
                                    <div className="input_sett m-b-25">
                                        <div className="put_zone">
                                            <input type="text" className="wrput success" />
                                            <span className="put_check">
                                                <ImgComponent src={'check_green.svg'}/>
                                            </span>
                                        </div>
                                        <span className="sp_name pink">Success</span>
                                    </div>
                                    <div className="input_sett m-b-25">
                                        <div className="put_zone">
                                            <input type="text" className="wrput error" />
                                            <span className="put_check green"
                                                style={{backgroundImage: 'url("/images/check_green.svg")'}}>
                                            </span>
                                        </div>
                                        <span className="sp_name pink">Error</span>
                                        <p className="mess error">*Error Message</p>
                                    </div>
                                    <div className="input_sett m-b-25">
                                        <div className="put_zone">
                                            <input type="text" className="wrput disable" placeholder="Placeholder" disabled />
                                            <span className="put_check">
                                                <ImgComponent src={'check_green.svg'}/>
                                            </span>
                                        </div>
                                        <span className="sp_name pink">Disabled</span>
                                    </div>
                                    <div className="p-b-25"></div>
                                </div>

                                <div className="w-50">
                                    <div className="m-b-20">
                                        <h2 className="h2_b20">컴퍼넌트</h2>
                                    </div>
                                    <div className="m-b-25">
                                        <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={'Placeholder'} 
                                        messClass={'mess'} message={'메세지 테스트 입니다.'} />
                                    </div>
                                    <div className="m-b-25">
                                        <InputZoneComponent zoneClass={'put_zone'} type={'text'} inputClass={'wrput'} placeholder={'Placeholder'} value={'테스트'}
                                        messClass={'mess'} message={'메세지 테스트 입니다.'} />
                                    </div>
                                    <div className="m-b-25">
                                        <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput on'} placeholder={''} value={'Active'}
                                        messClass={'mess'} message={'메세지 테스트 입니다.'} />
                                    </div>
                                    <div className="m-b-25">
                                        <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput success'} placeholder={''} value={'Success'}
                                        messClass={'mess error'} message={'메세지 테스트 입니다.'} />
                                    </div>
                                    <div className="m-b-25">
                                        <InputZoneComponent zoneClass={'put_zone'} type={'text'} inputClass={'wrput error'} placeholder={''} value={'Error'} 
                                        messClass={'mess error'} message={'메세지 테스트 입니다.'} />
                                    </div>
                                    <SearchComponent zoneClass="put_zone w260" className="wrput put_srch" placeholder="Search" btn_tlt="검색"  />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="kit_sett w-100">
                        <div className="kit_top">
                            <h1>Input With</h1>
                        </div>
                        <div className="kit_cont">
                            <div className="dflx m-b-50">
                                <div className="m-r-50">
                                    <dl className='date_put_dl'>
                                        <dt>
                                            <span>산정등급</span>
                                        </dt>
                                        <dd>
                                            <SelectComponent className={'selector'}>
                                                <option value="">Tire 1</option>
                                                <option value="">Tire 2</option>
                                                <option value="">Tire 3</option>
                                            </SelectComponent>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="m-r-50">
                                    <dl className='date_put_dl'>
                                        <dt>
                                            <span>입력기간</span>
                                        </dt>
                                        <dd>
                                            <div className='grd_date_sett'>
                                                <SelectComponent className={'selector'}>
                                                    <option value="">월별</option>
                                                    <option value="">연별</option>
                                                </SelectComponent>
                                                <SelectComponent className={'selector'}>
                                                    <option value="">2020</option>
                                                    <option value="">2021</option>
                                                    <option value="">2022</option>
                                                </SelectComponent>
                                                <SelectComponent className={'selector'}>
                                                    <option value="">전체</option>
                                                    <option value="">1월</option>
                                                    <option value="">2월</option>
                                                    <option value="">3월</option>
                                                    <option value="">4월</option>
                                                    <option value="">5월</option>
                                                </SelectComponent>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div>
                                    <dl className='date_put_dl'>
                                        <dt>
                                            <span>총 매출 입력</span>
                                        </dt>
                                        <dd>
                                            <div className='totall_box'>
                                                <input className='wrput' type={'text'} value={'50,000,000'} />
                                                <span className='unit'>원</span>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            <div className="dflx">
                                <div className='dflx_ac m-r-50'>
                                    <div className='grd_month_set'>
                                        <SelectComponent className={'selector'}>
                                            <option value="">2020</option>
                                            <option value="">2021</option>
                                            <option value="">2022</option>
                                        </SelectComponent>
                                        <SelectComponent className={'selector'}>
                                            <option value="">전체</option>
                                            <option value="">1월</option>
                                            <option value="">2월</option>
                                            <option value="">3월</option>
                                            <option value="">4월</option>
                                            <option value="">5월</option>
                                            <option value="">6월</option>
                                            <option value="">7월</option>
                                            <option value="">8월</option>
                                            <option value="">9월</option>
                                            <option value="">10월</option>
                                            <option value="" selected>11월</option>
                                            <option value="">12월</option>
                                        </SelectComponent>
                                    </div>
                                    <ButtonComponent className={'btn_srch m-l-8'} txt={'조회'} />
                                </div>
                                <div className="m-r-50">
                                    <div className='input_sett'>
                                        <SelectComponent className={'selector med'}>
                                            <option value="">2020</option>
                                            <option value="">2021</option>
                                            <option value="">2022</option>
                                        </SelectComponent>
                                        <ButtonComponent className={'btn_srch'} txt={'검색'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="kit_sett w-60">
                        <div className="kit_top">
                            <h1>Button</h1>
                        </div>
                        <div className="kit_cont">
                            <div className="m-b-20">
                                <h2 className="h2_b20 m-b-10">Primary</h2>
                                <div className="dflx">
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default med">default</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default med on">Hover</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default med disable">Disabled</button>
                                    </div>
                                </div>
                                <div className="dflx">
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default med bldark">bldark</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default med bldark on">Hover</button>
                                    </div>
                                </div>
                                <div className="dflx">
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default">default</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default bldark">bldark</button>
                                    </div>
                                    <div className="kit_bt m-l-15">
                                        <button type="button" className="btn_default sm">default</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default sm bldark">bldark</button>
                                    </div>
                                    <div className="kit_bt m-l-15">
                                        <button type="button" className="btn_tab">default</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_tab on">on</button>
                                    </div>
                                </div>
                            </div>
                            <div className="m-b-20">
                                <h2 className="h2_b20 m-b-10">Secondary</h2>
                                <div className="dflx">
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default med grey">grey</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default med on grey">Hover</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default med disable">Disabled</button>
                                    </div>
                                </div>
                                <div className="dflx">
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default med wht">wht</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default med wht on">Hover</button>
                                    </div>
                                </div>
                                <div className="dflx">
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default med ltgrey">ltgrey</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default med ltgrey on">Hover</button>
                                    </div>
                                </div>
                                <div className="dflx">
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default wht">wht</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default grey">grey</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default ltgrey">ltgrey</button>
                                    </div>

                                    <div className="kit_bt m-l-20">
                                        <button type="button" className="btn_default bit wht">wht</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default bit grey">grey</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default bit ltgrey">ltgrey</button>
                                    </div>
                                </div>
                                <div className="dflx">
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default sm wht">wht</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default sm grey">grey</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default sm ltgrey">ltgrey</button>
                                    </div>

                                    <div className="kit_bt m-l-20">
                                        <button type="button" className="btn_default little wht">wht</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default little grey">grey</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_default little ltgrey">ltgrey</button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-b-20">
                                <h2 className="h2_b20 m-b-10">Etc</h2>
                                <div className="dflx">
                                    <div className="kit_bt">
                                        <button type="button" className="btn_srch">검색</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_srch bldark">검색</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_srch wht">검색</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_srch more">인증코드 발송</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="btn_srch med bldark">기준 연도 적용하기</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="button_default white">검색</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type="button" className="button_default lightgrey">검색</button>
                                    </div>
                                    <div className="kit_bt">
                                        <button type='button' className='btn_default wht plus'>
                                            <span className='img_plus'>
                                                <ImgComponent src={'plus.png'} />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-b-20">
                                <h2 className="h2_b20 m-b-10">Tab</h2>
                                <div className="m-b-20 dflx">
                                    <div className='tabt_line'>
                                        <ButtonComponent type={'button'} className={"tab_nemo on"} txt={'입력'} onClick={''} />
                                        <ButtonComponent type={'button'} className={"tab_nemo"} txt={'조회'} onClick={''} />
                                    </div>
                                    <div className="m-r-100"></div>
                                    <div className='tabt_line'>
                                        <ButtonComponent type={'button'} className={'btn_tab on'} onClick={''} txt={'전체'} />
                                        <ButtonComponent type={'button'} className={'btn_tab'} onClick={''} txt={'사용'} />
                                        <ButtonComponent type={'button'} className={'btn_tab'} onClick={''} txt={'미사용 입니다'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="kit_sett w-35">
                        <div className="kit_top">
                            <h1>Toast</h1>
                        </div>
                        <div className="kit_cont m-b-40">
                            <div className='toast_sett'>
                                <div className="toast_box">
                                    <div className="toast_in">
                                        <ImgComponent src={'toast_confirm_28px.svg'} />
                                        <p className='toast_text'>(아무개)님의 승인이 승인이승인이승인이 완료되었습니다.</p>
                                        <ButtonCloseComponent type={'button'} imgName={'close_black_20px.svg'} className={'button_default'} />
                                    </div>
                                </div>
                                <div className="toast_box">
                                    <div className="toast_in">
                                        <ImgComponent src={'toast_confirm_28px.svg'} />
                                        <p className='toast_text'>(아무개)님의 승인이 완료되었습니다.</p>
                                        <ButtonCloseComponent type={'button'} imgName={'close_black_20px.svg'} className={'button_default'} />
                                    </div>
                                </div>
                                <div className="toast_box">
                                    <div className="toast_in">
                                        <ImgComponent src={'toast_notice_28px.svg'} />
                                        <p className='toast_text'>(아무개)님이 반려처리되었습니다.</p>
                                        <ButtonCloseComponent type={'button'} imgName={'close_black_20px.svg'} className={'button_default'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kit_top">
                            <h1>Badge</h1>
                        </div>
                        <div className="kit_cont m-b-40">
                            <div className="dflx">
                                <div className="kit_select">
                                    <p className="users_state">대기</p>
                                </div>
                                <div className="kit_select">
                                    <p className="users_state users_pending">대기</p>
                                </div>
                                <div className="kit_select">
                                    <p className="users_state users_approval">승인</p>
                                </div>
                                <div className="kit_select">
                                    <p className="users_state users_rejection">변경</p>
                                </div>
                            </div>
                        </div>
                        <div className="kit_top">
                            <h1>Add Contents</h1>
                        </div>
                        <div className="kit_cont m-b-40">
                            <div onClick={''} className='add_contain'>
                                <div className='dflx_ac_jcent h-100'>
                                    <div className="add_button">
                                        <p className='plus24'>
                                            <ImgComponent src={'circ24_plus.svg'} />
                                        </p>
                                        <span>활동자료 입력 항목 추가</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="kit_sett w-100">
                        <div className="kit_top">
                            <h1>Select</h1>
                        </div>
                        <div className="kit_cont">
                            <div className="p-b-20">
                                <h2 className="h2_b20 m-b-10">Select box</h2>
                                <div className="m-b-20 dflx_jbet">
                                    <select className="selector" style={{backgroundImage: 'url("/images/selt_comma.svg")'}}>
                                        <option value="1">Select 1</option>
                                        <option value="2">Select 2</option>
                                        <option value="3">Select 3</option>
                                    </select>
                                    <select className="selector" style={{backgroundImage: 'url("/images/selt_comma.svg")'}} disabled>
                                        <option value="1">Disable</option>
                                        <option value="2">Disable</option>
                                        <option value="3">Disable</option>
                                    </select>
                                    <SelectComponent className={'selector'}>
                                        <option value="1">Select 1</option>
                                        <option value="2">Select 2</option>
                                        <option value="3">Select 3</option>
                                    </SelectComponent>
                                    <SelectComponent className={'selector'} disabled={'disabled'}>
                                        <option value="1">Disable</option>
                                        <option value="2">Disable</option>
                                        <option value="3">Disable</option>
                                    </SelectComponent>
                                </div>
                            </div>
                            <div>
                                <h2 className="h2_b20 m-b-10">Check box</h2>
                                <div className="dflx">
                                    <div className="kit_select">
                                        <p className={'check_box'}>
                                            <ImgComponent className={'icon'} src={'checkbox.svg'} />
                                            <ImgComponent className={'icon_on'} src={'checkbox_on.svg'} />
                                        </p>
                                    </div>
                                    <div className="kit_select">
                                        <p className={'check_box on'}>
                                            <ImgComponent className={'icon'} src={'checkbox.svg'} />
                                            <ImgComponent className={'icon_on'} src={'checkbox_on.svg'} />
                                        </p>
                                    </div>
                                    <div className="kit_select">
                                        <CheckOnlyComponent />
                                    </div>
                                    <div className="kit_select m-r-100">
                                        <CheckDlComponent>
                                            <p className='terms_sent'>[필수] 회원이용약관</p>
                                        </CheckDlComponent>
                                    </div>
                                    <div className="kit_select">
                                        <div className='custom_checkbox'>
                                            <input type={'checkbox'} id={'checkbox1'} />
                                            <label htmlFor={'checkbox1'} className={''}></label>
                                        </div>
                                    </div>
                                    <div className="kit_select">
                                        <div className='custom_checkbox'>
                                            <input type={'checkbox'} id={'checkbox2'} />
                                            <label htmlFor={'checkbox2'} className={'on'}></label>
                                        </div>
                                    </div>
                                    <div className="kit_select">
                                        <CheckboxComponent /> 
                                    </div>
                                    <div className="kit_select">
                                        <CheckboxComponent checkID={"checkbox3"} text={'이메일과 동일'} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="kit_sett w-100">
                        <div className="kit_top">
                            <h1>Scroll</h1>
                        </div>
                        <div className="kit_cont">
                            <div className="dflx">
                                <div className="m-r-30 scroll_box scroll">
                                    <div className="w500 h200"></div>
                                </div>
                                <div className="m-r-30 scroll_box scroll sc_x">
                                    <div className="w500 h200"></div>
                                </div>
                                <div className="scroll_box scroll sc_y">
                                    <div className="w500 h200"></div>
                                </div>
                            </div>
                            <div className="m-t-30">
                                <div className='terms_cont w500'>
                                    <div className='temrs_text_wrap'>
                                        <textarea className='terms_area'>
                                            여러분을 환영합니다. 네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다. 네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다. 다양한 네이버 서비스를 즐겨보세요. 네이버는 www.naver.com을 비롯한 네이버 도메인의 웹사이트 및 응용프로그램(어플리케이션, 앱)을 통해 정보 검색, 다른 이용자와의 커뮤니케이션, 콘텐츠 제공, 상품 쇼핑 등 여러분의 생활에 편리함을 더할 수 있는 다양한 서비스를 제공하고 있습니다.
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="kit_sett w-100">
                        <div className="kit_top">
                            <h1>SignUp</h1>
                        </div>
                        <div className="kit_cont">
                            <div className="dflx_jbet">

                                <div className="w-45">
                                    <h3 className="h3_b16">회사 정보 입력</h3>
                                    <div className="signup_step_form">
                                        <div className="form_row form_company_name">
                                            <div className="form_title">
                                                법인/기업명
                                            </div>
                                            <div className="form_contents">
                                                <InputZoneComponent zoneClass={'put_zone'} type={'text'} inputClass={'wrput error'} placeholder={''} 
                                                messClass={'mess error'} message={'*존재하지 않는 기업입니다.'} />
                                                <ButtonComponent className={'btn_default little grey'} txt={'검색'} onClick={''} />
                                            </div>
                                        </div>
                                        <div className="form_row">
                                            <div className="form_title">
                                                대표자명
                                            </div>
                                            <div className="form_contents">
                                                <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput success'} value={'홍길동'} placeholder={''} 
                                                messClass={'mess error'} message={'*존재하지 않는 이름입니다.'} />
                                            </div>
                                        </div>
                                        <div className="form_row">
                                            <div className="form_title">
                                                사업자번호(고유번호)
                                            </div>
                                            <div className="form_contents">
                                                <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={''} 
                                                messClass={'mess error'} message={'*존재하지 않는 이름입니다.'} />
                                            </div>
                                        </div>
                                        
                                        <div className="form_row">
                                            <div className="form_title">
                                                사업자번호(고유번호)
                                            </div>
                                            <div className="form_contents">
                                                <div className='put_zone'>
                                                    <input type='text' className='wrput' placeholder='' value='' />
                                                    <span className="put_check green"></span>
                                                    <p className='mess'>*주관리자를 통해 가입되어 있는 회사명을 검색을 통해 입력합니다.</p>
                                                    <p className='mess'>가입이 되어 있지 않을 경우 검색되지 않습니다.</p>
                                                </div>
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
                                                </SelectComponent>
                                                <InputZoneComponent zoneClass={'put_zone'} type={'text'} inputClass={'wrput'} placeholder={'"-"를 제외하고 입력'} 
                                                messClass={'mess error'} message={''} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-45">
                                    <h3 className="h3_b16">회사 정보 입력</h3>
                                    <div className="signup_step_form">
                                        <div className="sign_row">
                                            <div className="sign_title">
                                                법인/기업명
                                            </div>
                                            <div className="sign_write">
                                                <InputZoneComponent zoneClass={'put_zone'} type={'text'} inputClass={'wrput error'} placeholder={''} 
                                                messClass={'mess error'} message={'*존재하지 않는 기업입니다.'} />
                                                <ButtonComponent className={'btn_default little grey'} txt={'검색'} onClick={''} />
                                            </div>
                                        </div>
                                        <div className="sign_row">
                                            <div className="sign_title">
                                                대표자명
                                            </div>
                                            <div className="sign_write">
                                            <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput success'} value={'홍길동'} placeholder={''} 
                                                messClass={'mess error'} message={'*존재하지 않는 이름입니다.'} />
                                            </div>
                                        </div>
                                        <div className="sign_row">
                                            <div className="sign_title">
                                                사업자번호(고유번호)
                                            </div>
                                            <div className="sign_write">
                                                <InputZoneComponent zoneClass={'put_zone norm'} type={'text'} inputClass={'wrput'} placeholder={''} 
                                                messClass={'mess'} message={'*.'} />
                                            </div>
                                        </div>

                                        <div className="sign_row">
                                            <div className="sign_title">
                                                사업자번호(고유번호)
                                            </div>
                                            <div className="sign_write">
                                                <div className='put_zone'>
                                                    <input type='text' className='wrput' placeholder='' value='' />
                                                    <span className="put_check green"></span>
                                                    <p className='mess'>*주관리자를 통해 가입되어 있는 회사명을 검색을 통해 입력합니다.</p>
                                                    <p className='mess'>가입이 되어 있지 않을 경우 검색되지 않습니다.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sign_row sign_business">
                                            <div className="sign_title">
                                                사업자등록증
                                            </div>
                                            <div className="sign_write">
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
                                                <div className="message">
                                                * pdf, jpg, png, gif, bmp 형식의 이미지(10MB 이하)를 업로드해 주세요. <br/>&nbsp;&nbsp;&nbsp;파일명에 마침표(.)가 포함된 경우 업로드 불가합니다.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sign_row sign_address">
                                            <div className="sign_title">
                                                회사 주소
                                            </div>
                                            <div className="sign_write">
                                                <div className="find_address">
                                                    <ButtonComponent type={'button'} className={'btn_default bit ltgrey'} txt={'주소찾기'} onClick={''} />
                                                    <InputComponent type={'text'} className={'wrput input01'} />
                                                    <InputComponent type={'text'} className={'wrput input02'} placeholder={'상세주소'} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sign_row sign_phone">
                                            <div className="sign_title">
                                                대표전화
                                            </div>
                                            <div className="sign_write">
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
                                                </SelectComponent>
                                                <InputZoneComponent zoneClass={'put_zone'} type={'text'} inputClass={'wrput'} placeholder={'"-"를 제외하고 입력'} 
                                                messClass={'mess error'} message={''} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>

                    <section className="kit_sett w-100">
                        <div className="kit_top">
                            <h1>Table</h1>
                        </div>
                        <div className="kit_cont">  
                            <div className="m-b-30">
                                <table className='netz_table'>
                                    <thead>
                                    <tr>
                                        <th>유형</th>
                                        <th>위치</th>
                                        <th>조직</th>
                                        <th>소유형태</th>
                                        <th>설정기준</th>
                                        <th className='rline'>지분(%)</th>
                                        <th>운영구분</th>
                                        <th>연소원</th>
                                        <th>배출시설명</th>
                                        <th>연료</th>
                                        <th>관리코드</th>
                                        <th>담당자</th>
                                        <th>직급</th>
                                        <th>등록일/수정일</th>
                                        <th>상태</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p className='td_txt'>{'건물'}</p>
                                            </td>
                                            <td>
                                                <p className='td_txt'>{'서울공장'}</p>
                                            </td>
                                            <td>
                                                <p className='td_txt'>{'본관'}</p>
                                            </td>
                                            <td>
                                                <p className='td_txt'>{'회사'}</p>
                                            </td>
                                            <td>
                                                <p className='td_txt'>{'운영통제'}</p>
                                            </td>
                                            <td className='rline'>
                                                <p className='td_txt'>{'100'}</p>
                                            </td>
                                            <td>
                                                <p className={'td_txt scp2'}>{'Scope22'}</p>
                                            </td>
                                            <td>
                                                <p className='td_txt'>{'고정'}</p>
                                            </td>
                                            <td>
                                                <p className='td_txt'>{'난방도일러'}</p>
                                            </td>
                                            <td>
                                                <p className='td_txt'>{'OTG-BD000001'}</p>
                                            </td>
                                            <td>
                                                <p className='td_txt'>{'홍길동'}</p>
                                            </td>
                                            <td>
                                                <p className='td_txt'>{'부장'}</p>
                                            </td>
                                            <td>
                                                <p className='td_txt'>{'부장'}</p>
                                            </td>
                                            <td>
                                                <div className='td_date'>
                                                    <p className='date_txt'>{'2022.10.01'}</p>
                                                    <p className='date_txt'>{'2022.10.01'}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <p className={'td_txt'}>{'주관리자'}</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="m-b-10">
                                <table className='netz_table'>
                                    <thead className='users_table'>
                                        <tr>
                                            <th className='table_checkbox_th'></th>
                                            <th>조직</th>
                                            <th>부서</th>
                                            <th>이름</th>
                                            <th>직급</th>
                                            <th>연락처(내선번호)</th>
                                            <th>이메일</th>
                                            <th>신청일/수정일</th>
                                            <th>상태</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='users_table'>
                                            <td>
                                                <CheckboxComponent checkID={"checkbox0"} />
                                            </td>
                                            <td>
                                                <p className='td_txt'>{'서울본사'}</p>
                                            </td>      
                                            <td>
                                                <p className='td_txt'>{'관리부'}</p>
                                            </td>               
                                            <td>
                                                <p className='td_name' onClick={''}>{'봉준호'}</p>
                                            </td>      
                                            <td>
                                                <p className='td_txt'>{'부장'}</p>
                                            </td>     
                                            <td>
                                                <p className='td_txt'>{'1234-5678(03)'}</p>
                                            </td>
                                            <td>
                                                <p className='td_txt'>{'chaeunwoo@gmail.com'}</p>
                                            </td>
                                            <td>
                                                <div className='td_date'>
                                                    <p className='date_txt'>{'2022.10.01'}</p>
                                                    <p className='date_txt'>{'2022.10.01'}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <p className={'users_state users_pending'}>
                                                    {'대기'}
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section className="kit_sett w-100">
                        <div className="kit_top">
                            <h1>Dialog</h1>
                        </div>
                        <div className="kit_cont">
                            <div className="m-b-40">
                                <h2 className="h2_b20 m-b-10">Small</h2>
                                <div className="dflx">
                                    <div className="kit_pop">
                                        <div className="pop_body pop_small">
                                            <p className="del24">
                                                <ImgComponent src={'del24.svg'}/>
                                            </p>
                                            <div className="pop_top">
                                                <h2 className="h2_b20">회원 정보 변경</h2>
                                            </div>
                                            <div className="pop_cont">
                                                <p className="pop_txt">
                                                    회원 정보 변경이 완료 되었습니다.
                                                </p>
                                            </div>
                                            <div className="pop_bottom">
                                                <button className="btn_default wht">취소</button>
                                                <button className="btn_default">확인</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kit_pop">
                                        <div className="pop_body pop_small">
                                            <p className="del24">
                                                <ImgComponent src={'del24.svg'}/>
                                            </p>
                                            <div className="pop_top">
                                                <h2 className="h2_b20">반려사유</h2>
                                            </div>
                                            <div className="pop_cont">
                                                <p className="pop_txt">
                                                    승인에 필요한 정보가 부족합니다.
                                                </p>
                                                <div>
                                                    <ul className="pop_record">
                                                        <li>- 재직증명서 누락</li>
                                                        <li>- 연락처 불일치</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="pop_bottom">
                                                <button className="btn_default wht">취소</button>
                                                <button className="btn_default">확인</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kit_pop">
                                        <div className="pop_body pop_small">
                                            <p className="del24">
                                                <ImgComponent src={'del24.svg'}/>
                                            </p>
                                            <div className="pop_top">
                                                <h2 className="h2_b20">인증메일발송</h2>
                                            </div>
                                            <div className="pop_cont">
                                                <p className='pop_txt'>메일함에서 info@netz.com</p>
                                                <p className='pop_txt'>인증 메일의 인증코드를 확인하세요.</p>
                                            </div>
                                            <div className="pop_bottom">
                                                <button className="btn_default wht">취소</button>
                                                <button className="btn_default">확인</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="m-b-40">
                                <h2 className="h2_b20 m-b-10">Mideum</h2>
                                <div className="dflx">
                                    <div className="kit_pop">
                                        <div className="pop_body pop_users_confirm">
                                            <p className="del24">
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
                                                        <a className='text_02'>재직증명서.pdf</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pop_bottom">
                                                <button className="btn_default error">반려</button>
                                                <button className="btn_default">확인</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kit_pop">
                                        <div className="pop_body pop_medium">
                                            <p className="del24">
                                                <ImgComponent src={'del24.svg'} />
                                            </p>
                                            <div className="pop_top">
                                                <h2 className="h2_b20">조직/배출시설 등록</h2>
                                            </div>
                                            <div className="pop_cont">
                                                <section className='pop_enrolls'>
                                                    <div className='enrolls_cont'>
                                                        <div className='enrolls_top'>
                                                            <h3 className='h3_b16'>조직</h3>
                                                        </div>
                                                        <div className='enrolls_enroll'>
                                                            <dl className='dl_enroll'>
                                                                <dt className='lett_sp1'>
                                                                    <div className='dflx_jbet'>
                                                                        <span>유</span>
                                                                        <span>형</span>
                                                                    </div>
                                                                </dt>
                                                                <dd>
                                                                    <SelectComponent className={'selector'}>
                                                                        <option value="0">건물</option>
                                                                        <option value="1">건물</option>
                                                                        <option value="2">건물</option>
                                                                    </SelectComponent>
                                                                </dd>
                                                            </dl>
                                                            <dl className='dl_enroll'>
                                                                <dt>
                                                                    <div className='dflx_jbet'>
                                                                        <span>조</span>
                                                                        <span>직</span>
                                                                        <span>명</span>
                                                                    </div>
                                                                </dt>
                                                                <dd>
                                                                    <SelectComponent className={'selector'}>
                                                                        <option value="0">서울공장</option>
                                                                        <option value="1">서울공장</option>
                                                                        <option value="2">서울공장</option>
                                                                    </SelectComponent>
                                                                </dd>
                                                            </dl>
                                                            <dl className='dl_enroll'>
                                                                <dt>
                                                                    <div className='dflx_jbet'>
                                                                        <span>조</span>
                                                                        <span>직</span>
                                                                        <span>구</span>
                                                                        <span>분</span>
                                                                    </div>
                                                                </dt>
                                                                <dd>
                                                                    <InputComponent className={'wrput'} />
                                                                </dd>
                                                            </dl>
                                                            <dl className='dl_enroll'>
                                                                <dt>
                                                                    <div className='dflx_jbet'>
                                                                        <span>소</span>
                                                                        <span>유</span>
                                                                        <span>형</span>
                                                                        <span>태</span>
                                                                    </div>
                                                                </dt>
                                                                <dd>
                                                                    <SelectComponent className={'selector'}>
                                                                        <option value="0">생산공장</option>
                                                                        <option value="1">생산공장</option>
                                                                        <option value="2">생산공장</option>
                                                                    </SelectComponent>
                                                                </dd>
                                                            </dl>
                                                            <dl className='dl_enroll'>
                                                                <dt>
                                                                    <div className='dflx_jbet'>
                                                                        <span>설</span>
                                                                        <span>정</span>
                                                                        <span>기</span>
                                                                        <span>준</span>
                                                                    </div>
                                                                </dt>
                                                                <dd>
                                                                    <div className='grd_selt_sett'>
                                                                        <SelectComponent className={'selector'}>
                                                                            <option value="0">지분할당</option>
                                                                            <option value="1">지분할당</option>
                                                                            <option value="2">지분할당</option>
                                                                        </SelectComponent>
                                                                        <div className='dflx_ae_jbet'>
                                                                            <SelectComponent className={'selector w-85'}>
                                                                                <option value="0">100</option>
                                                                                <option value="1">90</option>
                                                                                <option value="2">80</option>
                                                                            </SelectComponent>
                                                                            <span className='unit'>%</span>
                                                                        </div>
                                                                    </div>
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                    <div className='enrolls_cont'>
                                                        <div className='enrolls_top'>
                                                            <h3 className='h3_b16'>배출시설</h3>
                                                        </div>
                                                        <div className='enrolls_enroll'>
                                                            <dl className='dl_enroll'>
                                                                <dt>
                                                                    <div className='dflx_jbet'>
                                                                        <span>구</span>
                                                                        <span>분</span>
                                                                    </div>
                                                                </dt>
                                                                <dd>
                                                                    <SelectComponent className={'selector'}>
                                                                        <option value="0">Scope1</option>
                                                                        <option value="1">Scope2</option>
                                                                        <option value="2">Scope3</option>
                                                                    </SelectComponent>
                                                                </dd>
                                                            </dl>
                                                            <dl className='dl_enroll'>
                                                                <dt>
                                                                    <div className='dflx_jbet'>
                                                                        <span>연</span>
                                                                        <span>소</span>
                                                                        <span>원</span>
                                                                    </div>
                                                                </dt>
                                                                <dd>
                                                                    <SelectComponent className={'selector'}>
                                                                        <option value="0">고정연소원</option>
                                                                        <option value="1">고정연소원</option>
                                                                        <option value="2">고정연소원</option>
                                                                    </SelectComponent>
                                                                </dd>
                                                            </dl>
                                                            <dl className='dl_enroll'>
                                                                <dt>
                                                                    <div className='dflx_jbet'>
                                                                        <span>배</span>
                                                                        <span>출</span>
                                                                        <span>시</span>
                                                                        <span>설</span>
                                                                        <span>명</span>
                                                                    </div>
                                                                </dt>
                                                                <dd>
                                                                    <InputComponent className={'wrput'} placeholder={'기타입력'} />
                                                                </dd>
                                                            </dl>
                                                            <dl className='dl_enroll'>
                                                                <dt>
                                                                    <div className='dflx_jbet'>
                                                                        <span>연</span>
                                                                        <span>료</span>
                                                                        <span>/</span>
                                                                        <span>폐</span>
                                                                        <span>기</span>
                                                                        <span>물</span>
                                                                    </div>
                                                                </dt>
                                                                <dd>
                                                                    <SelectComponent className={'selector'}>
                                                                        <option value="0">도시가스(LNG)</option>
                                                                        <option value="1">도시가스(LNG)</option>
                                                                        <option value="2">도시가스(LNG)</option>
                                                                    </SelectComponent>
                                                                </dd>
                                                            </dl>
                                                            <dl className='dl_enroll'>
                                                                <dt>
                                                                    <div className='dflx_jbet'>
                                                                        <span>관</span>
                                                                        <span>리</span>
                                                                        <span>코</span>
                                                                        <span>드</span>
                                                                    </div>
                                                                </dt>
                                                                <dd>
                                                                    <InputComponent className={'wrput'} />
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="pop_bottom">
                                                <button className="btn_default wht">취소</button>
                                                <button className="btn_default">확인</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="m-b-40">
                                <h2 className="h2_b20 m-b-10">Large</h2>
                                <div className="dflx">
                                    <div className="kit_pop">
                                        <div className="pop_body pop_large">
                                            <p className="del24">
                                                <ImgComponent src={'del24.svg'} />
                                            </p>
                                            <div className="pop_top">
                                                <h2 className="h2_b20">증빙 문서 등록</h2>
                                            </div>
                                            <div className="pop_cont">
                                                <section className='pop_contents'>
                                                    <table className='netz_table evid_table'>
                                                        <thead>
                                                            <tr>
                                                                <th className='th_kinds'>문서종류</th>
                                                                <th className='th_upload'>업로드</th>
                                                                <th>파일명</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className='tal'>
                                                                    <p className='td_txt p-l-10'>건축물 관리대장</p>
                                                                </td>
                                                                <td>
                                                                    <div className='file_btwrap'>
                                                                        <ButtonComponent className={'btn_default sm wht'} txt={'File'} />
                                                                        <input type="file" className='file_put' />
                                                                    </div>
                                                                </td>
                                                                <td className='tal'>
                                                                    <div className='file_result'>
                                                                        <p className='td_txt'>A사_건축물관리대장.pdf</p>
                                                                        <span className='put_check put_delete'>
                                                                            <ImgComponent src={'del12_circle.svg'} />
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='tal'>
                                                                    <p className='td_txt p-l-10'>등기부등본</p>
                                                                </td>
                                                                <td>
                                                                    <div className='file_btwrap'>
                                                                        <ButtonComponent className={'btn_default sm wht'} txt={'File'} />
                                                                        <input type="file" className='file_put' />
                                                                    </div>
                                                                </td>
                                                                <td className='tal'>
                                                                    <div className='file_result'>
                                                                        <p className='td_txt'>A사_등기부등본.pdf</p>
                                                                        <span className='put_check put_delete'>
                                                                            <ImgComponent src={'del12_circle.svg'} />
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='tal'>
                                                                    <p className='td_txt p-l-10'>임대차계약서</p>
                                                                </td>
                                                                <td>
                                                                    <div className='file_btwrap'>
                                                                        <ButtonComponent className={'btn_default sm wht'} txt={'File'} />
                                                                        <input type="file" className='file_put' />
                                                                    </div>
                                                                </td>
                                                                <td className='tal'>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='tal'>
                                                                    <p className='td_txt p-l-10'>배출시설 허가증</p>
                                                                </td>
                                                                <td>
                                                                    <div className='file_btwrap'>
                                                                        <ButtonComponent className={'btn_default sm wht'} txt={'File'} />
                                                                        <input type="file" className='file_put' />
                                                                    </div>
                                                                </td>
                                                                <td className='tal'>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='tal'>
                                                                    <p className='td_txt p-l-10'>유형자산관리대장</p>
                                                                </td>
                                                                <td>
                                                                    <div className='file_btwrap'>
                                                                        <ButtonComponent className={'btn_default sm wht'} txt={'File'} />
                                                                        <input type="file" className='file_put' />
                                                                    </div>
                                                                </td>
                                                                <td className='tal'>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='tal'>
                                                                    <p className='td_txt p-l-10'>시설배치도</p>
                                                                </td>
                                                                <td>
                                                                    <div className='file_btwrap'>
                                                                        <ButtonComponent className={'btn_default sm wht'} txt={'File'} />
                                                                        <input type="file" className='file_put' />
                                                                    </div>
                                                                </td>
                                                                <td className='tal'>
                                                                    <div className='file_result'>
                                                                        <p className='td_txt'>A사_시설배치도.pdf</p>
                                                                        <span className='put_check put_delete'>
                                                                            <ImgComponent src={'del12_circle.svg'} />
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='tal'>
                                                                    <p className='td_txt p-l-10'>차량관리대장</p>
                                                                </td>
                                                                <td>
                                                                    <div className='file_btwrap'>
                                                                        <ButtonComponent className={'btn_default sm wht'} txt={'File'} />
                                                                        <input type="file" className='file_put' />
                                                                    </div>
                                                                </td>
                                                                <td className='tal'>
                                                                    <div className='file_result'>
                                                                        <p className='td_txt'>A사_건축물관리대장.pdf</p>
                                                                        <span className='put_check put_delete'>
                                                                            <ImgComponent src={'del12_circle.svg'} />
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='tal td_etc'>
                                                                    <input type="text" className='wrput etc' placeholder='기타입력' />
                                                                </td>
                                                                <td className='td_etc'>
                                                                    <div className='file_btwrap'>
                                                                        <ButtonComponent className={'btn_default sm wht'} txt={'File'} />
                                                                        <input type="file" className='file_put' />
                                                                    </div>
                                                                </td>
                                                                <td className='tal td_etc'>
                                                                    <div className='file_result dflx_jbet'>
                                                                        <p className='td_txt'></p>
                                                                        <p className='trash'>
                                                                            <ImgComponent src={'trash.svg'} />
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className='plus_zone'>
                                                        <button type='button' className='btn_default wht plus'>
                                                            <span className='img_plus'>
                                                                <ImgComponent src={'plus.png'} />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="pop_bottom">
                                                <button className="btn_default wht">취소</button>
                                                <button className="btn_default">확인</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="kit_sett w-100">
                        <div className="kit_top">
                            <h1>Pop over</h1>
                        </div>
                        <div className="kit_cont">
                            <div className="dflx">

                                <div className="kit_pop">
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
                                            <ButtonComponent type={'button'} className={'member_modify'} txt={'회원정보변경'} />
                                            <ButtonComponent type={'button'} className={'member_logout'} txt={'로그아웃'} />
                                        </div>
                                    </div>
                                </div>
                                <div className="kit_pop">
                                    <div className="member_popup_box">
                                        <div className="pop_body">
                                            <section className="alarm_top">
                                                <h2 className='h2_b20'>알림</h2>
                                                <ButtonComponent className={'btn_default sm wht'} txt={'모두확인'} />
                                            </section>
                                            <section className='alarm_body'>
                                                <div className='alarm_cont'>
                                                    <dl className='point_dl'>
                                                        <dt>
                                                            <span className='point on'></span>
                                                        </dt>
                                                        <dd>
                                                            <p className='p_r14'>
                                                                이용자 신청이 반려되었습니다.
                                                            </p>
                                                        </dd>
                                                    </dl>
                                                    <article className='alarm_inner'>
                                                        <div className="alarm_detail">
                                                            <h4 className='h4_m14'>반려사유 :</h4>
                                                            <p className="p_r14 op06">
                                                                승인에 필요한 정보가 부족합니다.
                                                            </p>
                                                            <div>
                                                                <ul className="pop_record">
                                                                    <li>- 재직증명서 누락</li>
                                                                    <li>- 연락처 불일치</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <span className='timer'>
                                                            <span className='time'>4</span>
                                                            <span>시간 전</span>
                                                        </span>
                                                    </article>
                                                </div>
                                                <div className='alarm_cont grey'>
                                                    <dl className='point_dl'>
                                                        <dt>
                                                            <span className='point on'></span>
                                                        </dt>
                                                        <dd>
                                                            <p className='p_r14'>
                                                                이용자 신청이 완료되었습니다.
                                                            </p>
                                                        </dd>
                                                    </dl>
                                                    <article className='alarm_inner'>
                                                        <span className='timer'>
                                                            <span className='time'>4</span>
                                                            <span>시간 전</span>
                                                        </span>
                                                    </article>
                                                </div>
                                                <div className='alarm_cont'>
                                                    <dl className='point_dl'>
                                                        <dt>
                                                            <span className='point'></span>
                                                        </dt>
                                                        <dd>
                                                            <p className='p_r14'>
                                                                공지사항이 등록되었습니다.
                                                            </p>
                                                        </dd>
                                                    </dl>
                                                    <article className='alarm_inner'>
                                                        <span className='timer'>
                                                            <span className='time'>6</span>
                                                            <span>시간 전</span>
                                                        </span>
                                                    </article>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                </div>
            </article>
            
        </div>
    );
}

export default Kit;