import React, { Component } from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonComponent from '../common/ButtonComponent';


const PopTypes = ({ open, close }) => {

    const [radioState, setRadioState] = useState(1);
    const radioTab = (index) => {
        setRadioState(index);
    };

    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>

            <div className="pop_body pop_large_new">
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">목표 유형 선택</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain'>
                        <div className='tab_line'>
                            <div className={radioState === 1 ? "tab_radio on w-50" : "tab_radio w-50"} onClick={() => radioTab(1)}>
                                <ImgComponent className={'img'} src={'radio20.svg'} />
                                <ImgComponent className={'img_on'} src={'radio20_on.svg'} />
                                <span className='word'>절대량 목표방식</span>
                            </div>
                            <div className={radioState === 2 ? "tab_radio on w-50" : "tab_radio w-50"} onClick={() => radioTab(2)}>
                                <ImgComponent className={'img'} src={'radio20.svg'} />
                                <ImgComponent className={'img_on'} src={'radio20_on.svg'} />
                                <span className='word'>배출전망치 방식</span>
                            </div>
                        </div>
                        <section className='scope_zone'>
                            <div className={radioState === 1 ? "popn_chart on" : "popn_chart"}>
                                <div className='popn_chart_txt'>
                                    <p>
                                        기준년도 대비 온실가스 배출량의 감축을 설정하는 방식으로 <br/>이행관리가 투명하고 신뢰도가 높아 가장 선호되는 방식
                                    </p>
                                </div>
                                <ImgComponent src={'type_chart1.svg'} />
                            </div>
                            <div className={radioState === 2 ? "popn_chart on" : "popn_chart"}>
                                <div className='popn_chart_txt'>
                                    <p>
                                        감축을 위한 특별한 조취를 취하지 않을 경우 예상되는 미래 온실가스 <br/>
                                        배출전망치를 의미하며, 개발도상국에서 주로 채택하는 방식 (BAU : Business As Usual)
                                    </p>
                                </div>
                                <ImgComponent src={'type_chart2.svg'} />
                            </div>
                        </section>
                    </section>
                </div>
                <div className="popn_bottom dflx_jbet">
                    <ButtonComponent onClick={close} className="btn_default wht" txt={'닫기'} />
                    <ButtonComponent onClick={close} className="btn_default" txt={'등록'} />
                </div>
            </div>

        </div>
    )
}

export default PopTypes;

