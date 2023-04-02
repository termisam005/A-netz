import React, { Component } from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Header from '../component/layout/Header';
import Aside from '../component/layout/Aside';
import ButtonComponent from '../component/common/ButtonComponent';
import SelectComponent from '../component/common/SelectComponent';
import PopAlert from '../component/popup/PopAlert';
import ScopeChart1 from '../component/chart/ScopeChart1';
import ScopeChart2 from '../component/chart/ScopeChart2';
import ScopeChart3 from '../component/chart/ScopeChart3';
import ScopeChart4 from '../component/chart/ScopeChart4';
import RatioChart1 from '../component/chart/RatioChart1';
import RatioChart2 from '../component/chart/RatioChart2';


const Analysis = () => {

    const navigator = useNavigate();

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

            <div className='contents_inner'>

                <article className='inner_top'>
                    <div className='dflx_jbet'>
                        <div className='inner_title'>
                            <h1 className='h1_b24'>분석</h1>
                            {/* <div className='tabt_line data'>
                                <ButtonComponent type={'button'} className={'tab_nemo on'} txt={'분석 차트'} onClick={''} />
                                <ButtonComponent type={'button'} className={'tab_nemo'} txt={'감축 목표'} onClick={''} />
                            </div> */}
                        </div>
                        {/*<div className='inner_btzone'>*/}
                        {/*    <ButtonComponent type={'button'} className={'btn_default enroll'} txt={'저장'} onClick={() => navigator('/DataActivityView') } />*/}
                        {/*</div>*/}
                    </div>
                </article>

                <article className='tab_body on'>

                    <section className='conts_top'>
                        <div className='cotop_left dflx_ac'>
                            <SelectComponent className={'selector m-r-16'}>
                                <option value="">전체</option>
                                <option value="">본사</option>
                                <option value="" selected>서울1공장</option>
                                <option value="">서울2공장</option>
                                <option value="">샌프란시스코 제2공장</option>
                            </SelectComponent>
                            <span className='spipe28 m-r-16'></span>
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
                        <div className='cotop_right'>
                            <div className='inner_btzone'>
                                <ButtonComponent type={'button'} className={'btn_default enroll'} txt={'저장'} onClick={() => navigator('/DataActivityView') } />
                            </div>
                             {/*<ButtonComponent className={'btn_srch med bldark'} txt={'저장'} onClick={() => {}} />*/}
                        </div>
                    </section>

                    <section className='contents'>
                        <div className='anlay_top'>
                            <div className='volume_body'>
                                <article className='analy_volume'>
                                    <section className='volume_result'>
                                        <div className='top'>
                                            <h3 className='h3_b16'>총 온실가스 배출량</h3>
                                        </div>
                                        <div className='volume_count'>
                                            <h1 className='vol_count'>999,999,999</h1>
                                            <span className='p_r12'>tCO₂eq</span>
                                        </div>
                                    </section>
                                    <section className='scope_zone'>
                                        <span className='chart_unit'>(단위 : tCO₂eq)</span>
                                        <div className='chart_cont'>
                                            <ScopeChart1 />
                                        </div>
                                    </section>
                                    <section className='scope_zone'>
                                        <span className='chart_unit'>(단위 : TJ)</span>
                                        <div className='chart_cont'>
                                            <ScopeChart2 />
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </div>
                        <div className='anlay_conts'>
                            <article className='analy_charts2'>

                                <div className='analy_body'>
                                    <div className='chart_top'>
                                        <h3 className='h3_b16'>온실가스 배출 비율</h3>
                                    </div>
                                    <section className='scope_chart'>
                                        <span className='scope_sign'>Scope</span>
                                        <div className='chart_cont'>
                                            <RatioChart2 />
                                        </div>
                                    </section>
                                    <section className='chart_inner'>
                                        <span className='chart_unit'>(tCO₂eq/억)</span>
                                        <div className='top'>
                                            <h3 className='h3_m16'>Scope3 배출내역</h3>
                                        </div>
                                        <div className='chart_wrap'>
                                            <div className='chart_cont'>
                                                <ScopeChart3 />
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <div className='analy_body'>
                                    <div className='chart_top'>
                                        <h3 className='h3_b16'>에너지 사용 비율</h3>
                                    </div>
                                    <section className='scope_chart'>
                                        <span className='scope_sign'>에너지</span>
                                        <div className='chart_cont'>
                                            <RatioChart1 />
                                        </div>
                                    </section>
                                    <section className='chart_inner'>
                                        <span className='chart_unit'>(TJ/백만)</span>
                                        <div className='top'>
                                            <h3 className='h3_m16'>에너지 사용 내역</h3>
                                        </div>
                                        <div className='chart_wrap'>
                                            <div className='chart_cont'>
                                                <ScopeChart4 />
                                            </div>
                                        </div>
                                    </section>
                                </div>

                            </article>
                        </div>
                    </section>

                </article>

            </div>

        </div>
    );
}

export default Analysis;
