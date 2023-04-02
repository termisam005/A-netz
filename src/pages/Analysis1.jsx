import React, { Component } from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Header from '../component/layout/Header';
import Aside from '../component/layout/Aside';
import ButtonComponent from '../component/common/ButtonComponent';
import SelectComponent from '../component/common/SelectComponent';
import SearchComponent from '../component/common/SearchComponent';

import ScopeChart1 from '../component/chart/ScopeChart1';
import ScopeChart2 from '../component/chart/ScopeChart2'
import BoundaryChart from '../component/chart/BoundaryChart';
import SalesChart from '../component/chart/SalesChart';
import RatioChart3 from '../component/chart/RatioChart3';
import EmissionChart from '../component/chart/EmissionChart';


const Analysis1 = () => {

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
                            <div className='tabt_line data'>
                                <ButtonComponent type={'button'} className={'tab_nemo on'} txt={'분석 차트'} onClick={''} />
                                <ButtonComponent type={'button'} className={'tab_nemo'} txt={'감축 목표'} onClick={''} />
                            </div>
                        </div>
                    </div>
                </article>

                <article className='tab_body on'>

                    <section className='conts_top'>
                        <div className='cotop_left'>
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
                        </div>
                        <div className='cotop_right'>
                            <SearchComponent zoneClass="put_zone w260" className="wrput put_srch" placeholder="" btn_tlt="적용">
                                <span className='p_r14'>총 매출</span>
                            </SearchComponent>
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
                            <article className='analy_charts'>
                                <div className='analy_body'>
                                    <div className='chart_top'>
                                        <h3 className='h3_b16'>운영 경계별 데이터</h3>
                                    </div>
                                    <section className='doub_chart_wrap'>
                                        <div className='scope_step'>
                                            <p className='p_r14'>Scope1</p>
                                            <p className='p_r14'>Scope2</p>
                                            <p className='p_r14'>Scope3</p>
                                        </div>
                                        <div className='chart_cont'>
                                            <BoundaryChart />
                                        </div>
                                    </section>
                                </div>
                                <div className='analy_body'>
                                    <div className='chart_top'>
                                        <h3 className='h3_b16'>매출별 온실가스 배출량</h3>
                                    </div>
                                    <section className='doub_chart_wrap'>
                                        <div className='sales_chart_rcd'>
                                            <div className='sales_dispose'>
                                                <div className='dispose_result'>
                                                    <h1 className='vol_count'>80</h1>
                                                    <span className='chart_unit'>tCO₂eq/억</span>
                                                </div>
                                                <span className='date'>2022년 11월</span>
                                            </div>
                                        </div>
                                        <div className='chart_cont'>
                                            <SalesChart />
                                        </div>
                                    </section>
                                </div>
                                <div className='analy_body'>
                                    <div className='chart_top'>
                                        <h3 className='h3_b16'>온실가스 배출 비율</h3>
                                    </div>
                                    <section className='chart_wrap'>
                                        <div className='chart_cont'>
                                            <RatioChart3 />
                                        </div>
                                    </section>
                                    {/* <section className='doub_chart_wrap ratio_wrap'>
                                        <div className='chart_cont bord_dash'>
                                            <RatioChart1 />
                                        </div>
                                        <div className='chart_cont'>
                                            <RatioChart2 />
                                        </div>
                                    </section> */}
                                </div>
                                <div className='analy_body'>
                                    <div className='chart_top'>
                                        <h3 className='h3_b16'>온실가스 배출량</h3>
                                        <span className='chart_unit'>(단위 : tCO₂eq)</span>
                                    </div>
                                    <section className='chart_wrap'>
                                        <div className='chart_cont'>
                                            <EmissionChart />
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

export default Analysis1;
