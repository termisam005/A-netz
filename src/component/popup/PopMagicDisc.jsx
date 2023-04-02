import React, { Component } from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonComponent from '../common/ButtonComponent';
import InputComponent from '../common/InputComponent';
import SelectComponent from '../common/SelectComponent';


const PopMagicDisc = ({ open, close }) => {

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
        setMagicPop9(true);
        setMagicPop8(false);
    }


    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>

            <div className={magicPop1? "pop_body pop_large_new" : "pop_body none pop_large_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">배출시설 설정 마법사</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic full'>
                        <article className='magic_contain'>
                            <div className='magic_cont'>
                                <h1 className='h1_b24'>
                                    NetZ 마법사는 배출시설(운영경계)을 <br />쉽게 등록할 수 있도록 도와드려요.
                                </h1>
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
                    <h2 className="h2_b20">배출시설 설정 마법사</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic'>
                        <article className='magic_contain'>
                            <div className='magic_cont'>
                                <h1 className='h1_m24'>
                                    온실가스 배출시설을 등록할 사업장을 선택하세요.
                                </h1>
                                <p className='p_r14'>
                                    조직설정에서 설정한 조직 정보를 불러옵니다.
                                </p>
                            </div>
                            <div className='magic_form'>
                                <div className='dflx_jcent'>
                                    <SelectComponent className={'selector medium'}>
                                        <option value="">본사</option>
                                        <option value="">본사</option>
                                    </SelectComponent>
                                </div>
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
                    <h2 className="h2_b20">배출시설 설정 마법사</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic'>
                        <article className='magic_contain'>
                            <div className='magic_cont'>
                                <h1 className='h1_m24'>
                                    해당 구역에 연료 에너지를 사용하는 <br />고정 배출시설이 있나요?
                                </h1>
                                <div className='magic_texts p-l-8'>
                                    <p className='p_r14'>
                                        시설배치도 및 관리대장과 같은 증빙 문서를 기준으로 선택하세요. <br />예) 휘발유, 경유, 등유, LNG, LPG 등을 사용하는 난방보일러
                                    </p>
                                </div>
                            </div>
                            <div className='magic_form'>
                                <div className='tab_line dflx_jcent'>
                                    <div className={radioState === 1 ? "tab_radio on" : "tab_radio"} onClick={() => radioTab(1)}>
                                        <ImgComponent className={'img'} src={'radio20.svg'} />
                                        <ImgComponent className={'img_on'} src={'radio20_on.svg'} />
                                        <span className='word'>있어요</span>
                                        <SelectComponent className={'selector med_share sm m-l-12'}>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                        </SelectComponent>
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
                    <ButtonComponent onClick={openPop2} className="btn_default wht" txt={'이전'} />
                    <ButtonComponent onClick={openPop4} className="btn_default" txt={'다음'} />
                </div>
            </div>

            <div className={magicPop4? "pop_body pop_large_new" : "pop_body none pop_large_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">배출시설 설정 마법사</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic with_sc'>
                        <article className='magic_contain dflx_jstart'>
                            <div className='magic_cont'>
                                <h1 className='h1_m24'>
                                    배출 시설명과 사용 에너지 입력해 주세요.
                                </h1>
                                <div className='magic_texts'>
                                    <p className='p_r14'>
                                        근거 서류 및 공식적으로 사용 중인 명칭으로 입력하세요.
                                    </p>
                                </div>
                            </div>
                            <div className='magic_form'>
                                <section className='magic_scroll doub w-100 scroll'>
                                    <div className='mg_dbline'>
                                        <SelectComponent className={'selector med_share w-20'}>
                                            <option value="">구역</option>
                                            <option value="">생산동</option>
                                        </SelectComponent>
                                        <InputComponent className={'wrput medium w-50'} placeholder={'예)난방보일러'} />
                                        <SelectComponent className={'selector med_share w-30'}>
                                            <option value="">연료선택</option>
                                            <option value="">연료선택</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <SelectComponent className={'selector med_share w-20'}>
                                            <option value="">구역</option>
                                            <option value="">생산동</option>
                                        </SelectComponent>
                                        <InputComponent className={'wrput medium w-50'} placeholder={'예)난방보일러'} />
                                        <SelectComponent className={'selector med_share w-30'}>
                                            <option value="">연료선택</option>
                                            <option value="">연료선택</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <SelectComponent className={'selector med_share w-20'}>
                                            <option value="">구역</option>
                                            <option value="">생산동</option>
                                        </SelectComponent>
                                        <InputComponent className={'wrput medium w-50'} placeholder={'예)난방보일러'} />
                                        <SelectComponent className={'selector med_share w-30'}>
                                            <option value="">연료선택</option>
                                            <option value="">연료선택</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <SelectComponent className={'selector med_share w-20'}>
                                            <option value="">구역</option>
                                            <option value="">생산동</option>
                                        </SelectComponent>
                                        <InputComponent className={'wrput medium w-50'} placeholder={'예)난방보일러'} />
                                        <SelectComponent className={'selector med_share w-30'}>
                                            <option value="">연료선택</option>
                                            <option value="">연료선택</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <SelectComponent className={'selector med_share w-20'}>
                                            <option value="">구역</option>
                                            <option value="">생산동</option>
                                        </SelectComponent>
                                        <InputComponent className={'wrput medium w-50'} placeholder={'예)난방보일러'} />
                                        <SelectComponent className={'selector med_share w-30'}>
                                            <option value="">연료선택</option>
                                            <option value="">연료선택</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <SelectComponent className={'selector med_share w-20'}>
                                            <option value="">구역</option>
                                            <option value="">생산동</option>
                                        </SelectComponent>
                                        <InputComponent className={'wrput medium w-50'} placeholder={'예)난방보일러'} />
                                        <SelectComponent className={'selector med_share w-30'}>
                                            <option value="">연료선택</option>
                                            <option value="">연료선택</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <SelectComponent className={'selector med_share w-20'}>
                                            <option value="">구역</option>
                                            <option value="">생산동</option>
                                        </SelectComponent>
                                        <InputComponent className={'wrput medium w-50'} placeholder={'예)난방보일러'} />
                                        <SelectComponent className={'selector med_share w-30'}>
                                            <option value="">연료선택</option>
                                            <option value="">연료선택</option>
                                        </SelectComponent>
                                    </div>
                                </section>
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
                    <h2 className="h2_b20">배출시설 설정 마법사</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic'>
                        <article className='magic_contain'>
                            <div className='magic_cont'>
                                <h1 className='h1_m24'>
                                    해당 구역에 공정 배출시설이 있나요?
                                </h1>
                                <div className='magic_texts'>
                                    <p className='p_r14'>
                                        - 공정배출은 제품생산 공정에서 사용하는 원료의<br/>
                                        <sapn className='m-l-9'></sapn>물리/화학 반응에 의해 발생하는 온실가스 배출입니다.<br/>
                                        - 시설관리대장 및 관련 문서를 기준으로 작성하세요.
                                    </p>
                                </div>
                            </div>
                            <div className='magic_form'>
                                <div className='tab_line dflx_jcent'>
                                    <div className={radioState === 1 ? "tab_radio on" : "tab_radio"} onClick={() => radioTab(1)}>
                                        <ImgComponent className={'img'} src={'radio20.svg'} />
                                        <ImgComponent className={'img_on'} src={'radio20_on.svg'} />
                                        <span className='word'>있어요</span>
                                        <SelectComponent className={'selector med_share sm m-l-12'}>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                            <option value="">5</option>
                                        </SelectComponent>
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
                    <ButtonComponent onClick={openPop4} className="btn_default wht" txt={'이전'} />
                    <ButtonComponent onClick={openPop6} className="btn_default" txt={'다음'} />
                </div>
            </div>

            <div className={magicPop6? "pop_body pop_large_new" : "pop_body none pop_large_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">배출시설 설정 마법사6</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic with_sc'>
                        <article className='magic_contain dflx_jstart'>
                            <div className='magic_cont'>
                                <h1 className='h1_m24'>
                                    공정 배출 시설명과 사용 원료를 입력해 주세요.
                                </h1>
                                <div className='magic_texts'>
                                    <p className='p_r14'>
                                        근거 서류 및 공식적으로 사용 중인 명칭으로 입력하세요.
                                    </p>
                                </div>
                            </div>
                            <div className='magic_form'>
                                <section className='magic_scroll doub scroll'>
                                    <div className='mg_dbline'>
                                        <InputComponent className={'wrput medium'} placeholder={'예)소성시설, 용해로, 전해로'} />
                                        <SelectComponent className={'selector med_share'}>
                                            <option value="">연료선택</option>
                                            <option value="">연료선택</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <InputComponent className={'wrput medium'} placeholder={'예)소성시설, 용해로, 전해로'} />
                                        <SelectComponent className={'selector med_share'}>
                                            <option value="">연료선택</option>
                                            <option value="">연료선택</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <InputComponent className={'wrput medium'} placeholder={'예)소성시설, 용해로, 전해로'} />
                                        <SelectComponent className={'selector med_share'}>
                                            <option value="">연료선택</option>
                                            <option value="">연료선택</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <InputComponent className={'wrput medium'} placeholder={'예)소성시설, 용해로, 전해로'} />
                                        <SelectComponent className={'selector med_share'}>
                                            <option value="">연료선택</option>
                                            <option value="">연료선택</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <InputComponent className={'wrput medium'} placeholder={'예)소성시설, 용해로, 전해로'} />
                                        <SelectComponent className={'selector med_share'}>
                                            <option value="">연료선택</option>
                                            <option value="">연료선택</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <InputComponent className={'wrput medium'} placeholder={'예)소성시설, 용해로, 전해로'} />
                                        <SelectComponent className={'selector med_share'}>
                                            <option value="">연료선택</option>
                                            <option value="">연료선택</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <InputComponent className={'wrput medium'} placeholder={'예)소성시설, 용해로, 전해로'} />
                                        <SelectComponent className={'selector med_share'}>
                                            <option value="">연료선택</option>
                                            <option value="">연료선택</option>
                                        </SelectComponent>
                                    </div>
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
                    <h2 className="h2_b20">배출시설 설정 마법사7</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic'>
                        <article className='magic_contain'>
                            <div className='magic_cont'>
                                <h1 className='h1_m24'>
                                    해당 구역에 외부 전기 및 스팀(열)<br/>사용하는 시설이 있나요?
                                </h1>
                                <div className='magic_texts'>
                                    <p className='p_r14'>
                                        - 시설배치도 및 관리대장과 같은 증빙 문서를 기준으로 선택하세요.<br/>
                                        - (예) 전기를 사용하는 생산라인
                                    </p>
                                </div>
                            </div>
                            <div className='magic_form'>
                                <div className='tab_line dflx_jcent'>
                                    <div className={radioState === 1 ? "tab_radio on" : "tab_radio"} onClick={() => radioTab(1)}>
                                        <ImgComponent className={'img'} src={'radio20.svg'} />
                                        <ImgComponent className={'img_on'} src={'radio20_on.svg'} />
                                        <span className='word'>있어요</span>
                                        <SelectComponent className={'selector med_share sm m-l-12'}>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                            <option value="">5</option>
                                        </SelectComponent>
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
                    <h2 className="h2_b20">배출시설 설정 마법사8</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic with_sc'>
                        <article className='magic_contain dflx_jstart'>
                            <div className='magic_cont'>
                                <h1 className='h1_m24'>
                                    배출 시설명과 사용 에너지 입력해 주세요.
                                </h1>
                                <div className='magic_texts'>
                                    <p className='p_r14'>
                                        근거 서류 및 공식적으로 사용 중인 명칭으로 입력하세요.
                                    </p>
                                </div>
                            </div>
                            <div className='magic_form'>
                                <section className='magic_scroll doub scroll'>
                                    <div className='mg_dbline'>
                                        <InputComponent className={'wrput medium'} placeholder={'예)난방보일러1'} />
                                        <SelectComponent className={'selector med_share'}>
                                            <option value="">외부에너지선택</option>
                                            <option value="">전기(소비기준)</option>
                                            <option value="">스팀(열전용)</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <InputComponent className={'wrput medium'} placeholder={'예)난방보일러1'} />
                                        <SelectComponent className={'selector med_share'}>
                                            <option value="">외부에너지선택</option>
                                            <option value="">전기(소비기준)</option>
                                            <option value="">스팀(열전용)</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <InputComponent className={'wrput medium'} placeholder={'예)난방보일러1'} />
                                        <SelectComponent className={'selector med_share'}>
                                            <option value="">외부에너지선택</option>
                                            <option value="">전기(소비기준)</option>
                                            <option value="">스팀(열전용)</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <InputComponent className={'wrput medium'} placeholder={'예)난방보일러1'} />
                                        <SelectComponent className={'selector med_share'}>
                                            <option value="">외부에너지선택</option>
                                            <option value="">전기(소비기준)</option>
                                            <option value="">스팀(열전용)</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <InputComponent className={'wrput medium'} placeholder={'예)난방보일러1'} />
                                        <SelectComponent className={'selector med_share'}>
                                            <option value="">외부에너지선택</option>
                                            <option value="">전기(소비기준)</option>
                                            <option value="">스팀(열전용)</option>
                                        </SelectComponent>
                                    </div>
                                    <div className='mg_dbline'>
                                        <InputComponent className={'wrput medium'} placeholder={'예)난방보일러1'} />
                                        <SelectComponent className={'selector med_share'}>
                                            <option value="">외부에너지선택</option>
                                            <option value="">전기(소비기준)</option>
                                            <option value="">스팀(열전용)</option>
                                        </SelectComponent>
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
                    <h2 className="h2_b20">배출시설 설정 마법사</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic full'>
                        <article className='magic_contain'>
                            <div className='magic_cont'>
                                <h1 className='h1_b24'>
                                    배출시설 설정에 대한 마법사가 완료되었습니다.
                                </h1>
                                <h3 className='h3_r16'>
                                    시설에 대한 관리 및 증빙 문서는 [수정]을 통해 등록해 주세요.
                                </h3>
                                <h3 className='h3_r16 m-t-5'>
                                    시설관리코드는 수정을 통해 별도로 입력하세요.
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

export default PopMagicDisc;

