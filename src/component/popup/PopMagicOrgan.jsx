import React, { Component } from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonComponent from '../common/ButtonComponent';
import InputComponent from '../common/InputComponent';
import SelectComponent from '../common/SelectComponent';


const PopMagicOrgan = ({ open, close }) => {


    //라디오버튼
    const [radioState, setRadioState] = useState(1);
    const radioTab = (index) => {
        setRadioState(index);
    };

    //등록 마법사
    const [magicPop1, setMagicPop1] = useState(true);
    const [magicPop2, setMagicPop2] = useState(false);
    const [magicPop3, setMagicPop3] = useState(false);
    const [magicPop4, setMagicPop4] = useState(false);
    const [magicPop5, setMagicPop5] = useState(false);
    const [magicPop6, setMagicPop6] = useState(false);
    const [magicPop7, setMagicPop7] = useState(false);
    const [magicPop8, setMagicPop8] = useState(false);
    const [magicPop9, setMagicPop9] = useState(false);
    const [magicPop10, setMagicPop10] = useState(false);

    const openPop1 = () => {
        setMagicPop1(true);
        setMagicPop2(false);
    }
    const openPop2 = () => {
        setMagicPop3(false);
        setMagicPop2(true);
        setMagicPop1(false);
    }
    const openPop3 = () => {
        setMagicPop4(false);
        setMagicPop3(true);
        setMagicPop2(false);
    }
    const openPop4 = () => {
        setMagicPop5(false);
        setMagicPop4(true);
        setMagicPop3(false);
    }
    const openPop5 = () => {
        setMagicPop6(false);
        setMagicPop5(true);
        setMagicPop4(false);
    }
    const openPop6 = () => {
        setMagicPop7(false);
        setMagicPop6(true);
        setMagicPop5(false);
    }
    const openPop7 = () => {
        setMagicPop8(false);
        setMagicPop7(true);
        setMagicPop6(false);
    }
    const openPop8 = () => {
        setMagicPop9(false);
        setMagicPop8(true);
        setMagicPop7(false);
    }
    const openPop9 = () => {
        setMagicPop10(false);
        setMagicPop9(true);
        setMagicPop8(false);
    }
    const openPop10 = () => {
        setMagicPop10(true);
        setMagicPop9(false);
    }


    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>

            <div className={magicPop1? "pop_body pop_large_new" : "pop_body none pop_large_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">조직 설정 마법사</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic full'>
                        <article className='magic_contain'>
                            <div className='magic_cont'>
                                <h1 className='h1_b24'>
                                    NetZ 마법사는 회사의 조직경계를<br/>쉽게 등록할 수 있도록 도와드려요.
                                </h1>
                                <h3 className='h3_r16'>
                                    NetZ 마법사는 하나의 사업장만 등록을 할 수 있어요.
                                </h3>
                            </div>
                            <div className='magic_form'>
                                <ButtonComponent className={'btn_default enroll'} txt={'시작하기'} onClick={openPop2} />
                            </div>
                        </article>
                    </section>
                </div>
            </div>

            <div className={magicPop2? "pop_body pop_large_new" : "pop_body none pop_large_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">조직 설정 마법사</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic'>
                        <article className='magic_contain'>
                            <div className='magic_cont'>
                                <h1 className='h1_m24'>
                                    등록할 사업장의 이름을 입력하세요.
                                </h1>
                                <p className='p_r14'>
                                    사업자등록증 또는 임대차계약서에 작성된 이름을 쓰세요.
                                </p>
                            </div>
                            <div className='magic_form'>
                                <InputComponent className={'wrput medium'} placeholder={'(예) 후시파트너스'} />
                            </div>
                        </article>
                    </section>
                </div>
                <div className="popn_bottom dflx_jbet">
                    <ButtonComponent onClick={openPop1} className="btn_default wht" txt={'이전'} />
                    <ButtonComponent onClick={openPop3} className="btn_default" txt={'다음'} />
                </div>
            </div>

            <div className={magicPop3? "pop_body pop_large_new" : "pop_body none pop_large_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">조직 설정 마법사</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic'>
                        <article className='magic_contain'>
                            <div className='magic_cont'>
                                <h1 className='h1_m24'>
                                    단독 사업장 또는 본사인가요?
                                </h1>
                                <p className='p_r14'>
                                    아닐 경우 목록에서 선택해주세요.
                                </p>
                            </div>
                            <div className='magic_form'>
                                <div className='tab_line'>
                                    <div className={radioState === 1 ? "tab_radio on w-50" : "tab_radio w-50"} onClick={() => radioTab(1)}>
                                        <ImgComponent className={'img'} src={'radio20.svg'} />
                                        <ImgComponent className={'img_on'} src={'radio20_on.svg'} />
                                        <span className='word'>단독 사업장 본사</span>
                                    </div>
                                    <div className={radioState === 2 ? "tab_radio on w-50" : "tab_radio w-50"} onClick={() => radioTab(2)}>
                                        <ImgComponent className={'img'} src={'radio20.svg'} />
                                        <ImgComponent className={'img_on'} src={'radio20_on.svg'} />
                                        <span className='word'>아니오</span>
                                        <SelectComponent className={'selector med_share m-l-12'} disabled>
                                            <option value="">모회사</option>
                                            <option value="">자회사</option>
                                            <option value="">물류센터</option>
                                        </SelectComponent>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
                <div className="popn_bottom dflx_jbet">
                    <ButtonComponent onClick={openPop2} className="btn_default wht" txt={'이전'} />
                    <ButtonComponent onClick={openPop4} className="btn_default" txt={'다음'} />
                </div>
            </div>

            <div className={magicPop4? "pop_body pop_large_new" : "pop_body none pop_large_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">조직 설정 마법사</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic'>
                        <article className='magic_contain'>
                            <div className='magic_cont'>
                                <h1 className='h1_m24'>
                                    지분은 얼마나 설정이 되어 있나요?
                                </h1>
                                <p className='p_r14'>
                                    본사 외 사업장일 경우 설정된 지분만큼의 온실가스 배출량이 포함됩니다.
                                </p>
                            </div>
                            <div className='magic_form'>
                                <div className='dflx_ac_jcent'>
                                    <InputComponent className={'wrput medium w100'} placeholder={'1~100'} />
                                    <span className='p_r14 m-l-6'>%</span>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
                <div className="popn_bottom dflx_jbet">
                    <ButtonComponent onClick={openPop3} className="btn_default wht" txt={'이전'} />
                    <ButtonComponent onClick={openPop5} className="btn_default" txt={'다음'} />
                </div>
            </div>

            <div className={magicPop5? "pop_body pop_large_new" : "pop_body none pop_large_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">조직 설정 마법사</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic'>
                        <article className='magic_contain'>
                            <div className='magic_cont'>
                                <h1 className='h1_m24'>
                                    사업장에서 운영 중인 건물은 몇 개인가요?
                                </h1>
                                <div className='magic_texts'>
                                    <p className='p_r14'>
                                        - 등기부등본 기준으로 선택주세요.<br/> - 공유오피스 등은 포함되지 않습니다.<br/> - 직원이 '관리비'를 내는 경우에는 조직경계에서 제외합니다.
                                    </p>
                                </div>
                            </div>
                            <div className='magic_form'>
                                <div className='dflx_ac_jcent'>
                                    <SelectComponent className={'selector medium'}>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </SelectComponent>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
                <div className="popn_bottom dflx_jbet">
                    <ButtonComponent onClick={openPop4} className="btn_default wht" txt={'이전'} />
                    <ButtonComponent onClick={openPop6} className="btn_default" txt={'다음'} />
                </div>
            </div>

            <div className={magicPop6? "pop_body pop_large_new" : "pop_body none pop_large_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">조직 설정 마법사</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic with_sc'>
                        <article className='magic_contain dflx_jstart'>
                            <div className='magic_cont'>
                                <h1 className='h1_m24'>
                                    사업장 내 건물명을 입력해 주세요.
                                </h1>
                                <div className='magic_texts p-l-8'>
                                    <p className='p_r14'>
                                        근거 서류 및 공식적으로 사용 중인 명칭으로 입력하세요.<br/>예) 본관, 냉장창고, 콘도, 연수원, 직원 숙소
                                    </p>
                                </div>
                            </div>
                            <div className='magic_form'>
                                <section className='magic_scroll scroll'>
                                    <InputComponent className={'wrput medium m-b-8'} placeholder={'건물명'} />
                                    <InputComponent className={'wrput medium m-b-8'} placeholder={'건물명'} />
                                    <InputComponent className={'wrput medium m-b-8'} placeholder={'건물명'} />
                                    <InputComponent className={'wrput medium m-b-8'} placeholder={'건물명'} />
                                    <InputComponent className={'wrput medium m-b-8'} placeholder={'건물명'} />
                                    <InputComponent className={'wrput medium m-b-8'} placeholder={'건물명'} />
                                    <InputComponent className={'wrput medium m-b-8'} placeholder={'건물명'} />
                                    <InputComponent className={'wrput medium m-b-8'} placeholder={'건물명'} />
                                </section>
                            </div>
                        </article>
                    </section>
                </div>
                <div className="popn_bottom dflx_jbet">
                    <ButtonComponent onClick={openPop5} className="btn_default wht" txt={'이전'} />
                    <ButtonComponent onClick={openPop7} className="btn_default" txt={'다음'} />
                </div>
            </div>

            <div className={magicPop7? "pop_body pop_large_new" : "pop_body none pop_large_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">조직 설정 마법사</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic'>
                        <article className='magic_contain'>
                            <div className='magic_cont'>
                                <h1 className='h1_m24'>
                                    사업장에서 직접 운용 중인 차량이 있나요?
                                </h1>
                                <p className='p_r14'></p>
                            </div>
                            <div className='magic_form'>
                                <div className='tab_line dflx_jcent'>
                                    <div className={radioState === 1 ? "tab_radio on" : "tab_radio"} onClick={() => radioTab(1)}>
                                        <ImgComponent className={'img'} src={'radio20.svg'} />
                                        <ImgComponent className={'img_on'} src={'radio20_on.svg'} />
                                        <span className='word'>네</span>
                                    </div>
                                    <div className={radioState === 2 ? "tab_radio on m-l-100" : "tab_radio m-l-100"} onClick={() => radioTab(2)}>
                                        <ImgComponent className={'img'} src={'radio20.svg'} />
                                        <ImgComponent className={'img_on'} src={'radio20_on.svg'} />
                                        <span className='word'>아니오</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
                <div className="popn_bottom dflx_jbet">
                    <ButtonComponent onClick={openPop6} className="btn_default wht" txt={'이전'} />
                    <ButtonComponent onClick={openPop8} className="btn_default" txt={'다음'} />
                </div>
            </div>

            <div className={magicPop8? "pop_body pop_large_new" : "pop_body none pop_large_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">조직 설정 마법사</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic with_sc'>
                        <article className='magic_contain dflx_jstart'>
                            <div className='magic_cont'>
                                <h1 className='h1_m24'>
                                    차량 운용 방식과 차량 대수를 입력해 주세요.
                                </h1>
                                <div className='magic_texts p-l-45'>
                                    <p className='p_r14'>
                                        - 관련 서류 및 공식적으로 사용 중인 명칭으로 입력하세요.<br/>
                                        - 렌트 차량의 경우 일반적으로 조직 경계에 포함되지 않습니다.
                                    </p>
                                </div>
                            </div>
                            <div className='magic_form'>
                                <section className='magic_scroll scroll'>
                                    <div className='twoth_line'>
                                        <SelectComponent className={'selector med_share w-65'}>
                                            <option value="">법인차량</option>
                                        </SelectComponent>
                                        <InputComponent className={'wrput medium w-35'} placeholder={'1~100'} />
                                    </div>
                                    <div className='twoth_line'>
                                        <SelectComponent className={'selector med_share w-65'}>
                                            <option value="">리스</option>
                                        </SelectComponent>
                                        <InputComponent className={'wrput medium w-35'} placeholder={'1~100'} />
                                    </div>
                                    <div className='twoth_line'>
                                        <SelectComponent className={'selector med_share w-65'}>
                                            <option value="">렌트</option>
                                        </SelectComponent>
                                        <InputComponent className={'wrput medium w-35'} placeholder={'1~100'} />
                                    </div>
                                    <div className='twoth_line'>
                                        <SelectComponent className={'selector med_share w-65'}>
                                            <option value="">지입</option>
                                        </SelectComponent>
                                        <InputComponent className={'wrput medium w-35'} placeholder={'1~100'} />
                                    </div>
                                </section>
                            </div>
                        </article>
                    </section>
                </div>
                <div className="popn_bottom dflx_jbet">
                    <ButtonComponent onClick={openPop7} className="btn_default wht" txt={'이전'} />
                    <ButtonComponent onClick={openPop9} className="btn_default" txt={'다음'} />
                </div>
            </div>

            <div className={magicPop9? "pop_body pop_large_new" : "pop_body none pop_large_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">조직 설정 마법사</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic with_sc'>
                        <article className='magic_contain dflx_jstart'>
                            <div className='magic_cont'>
                                <h1 className='h1_m24'>
                                    사업장 내 차량명을 입력해 주세요.
                                </h1>
                                <div className='magic_texts p-l-8'>
                                    <p className='p_r14'>
                                        관련 서류 및 공식적으로 사용 중인 명칭으로 입력하세요.<br/>예) 영업승용1, 지게차1, 납품화물1
                                    </p>
                                </div>
                            </div>
                            <div className='magic_form'>
                                <section className='magic_scroll scroll'>
                                    <InputComponent className={'wrput medium m-b-8'} placeholder={'차량명'} />
                                    <InputComponent className={'wrput medium m-b-8'} placeholder={'차량명'} />
                                    <InputComponent className={'wrput medium m-b-8'} placeholder={'차량명'} />
                                    <InputComponent className={'wrput medium m-b-8'} placeholder={'차량명'} />
                                    <InputComponent className={'wrput medium m-b-8'} placeholder={'차량명'} />
                                    <InputComponent className={'wrput medium m-b-8'} placeholder={'차량명'} />
                                    <InputComponent className={'wrput medium m-b-8'} placeholder={'차량명'} />
                                    <InputComponent className={'wrput medium m-b-8'} placeholder={'차량명'} />
                                </section>
                            </div>
                        </article>
                    </section>
                </div>
                <div className="popn_bottom dflx_jbet">
                    <ButtonComponent onClick={openPop8} className="btn_default wht" txt={'이전'} />
                    <ButtonComponent onClick={openPop10} className="btn_default" txt={'다음'} />
                </div>
            </div>

            <div className={magicPop10? "pop_body pop_large_new" : "pop_body none pop_large_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">조직 설정 마법사</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic full'>
                        <article className='magic_contain'>
                            <div className='magic_cont'>
                                <h1 className='h1_b24'>
                                    조직 설정에 대한 마법사가 완료되었습니다.
                                </h1>
                                <h3 className='h3_r16'>
                                    시설에 대한 관리 및 증빙 문서는 [수정]을 통해 등록해 주세요.
                                </h3>
                            </div>
                            <div className='magic_form'>
                                <ButtonComponent className={'btn_default enroll'} txt={'완료'} onClick={close} />
                            </div>
                        </article>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default PopMagicOrgan;

