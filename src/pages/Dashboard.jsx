import React, { Component } from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Header from '../component/layout/Header';
import Aside from '../component/layout/Aside';
import ImgComponent from '../component/common/ImgComponent';
import SelectMiniComponent from '../component/common/SelectMiniComponent';
import ButtonComponent from '../component/common/ButtonComponent';
import SelectComponent from '../component/common/SelectComponent';

import ScopeChart1 from '../component/chart/ScopeChart1';
import ScopeChart2 from '../component/chart/ScopeChart2';
import SalesChart from '../component/chart/SalesChart';
import SalesChart01 from '../component/chart/SalesChart01';
import SalseChart3 from '../component/chart/SalesChart3';
import RatioChart4 from '../component/chart/RatioChart4';
import RatioChart5 from '../component/chart/RatioChart5';
import BoundaryChart1 from '../component/chart/BoundaryChart1';
import PopScope1 from '../component/popup/PopScope1';
import PopScope2 from '../component/popup/PopScope2';


const Dashboard = () => {

    const navigator = useNavigate();

    //Scope 자세히보기
    const [detailPop1, setDetailPop1] = useState(false);
    const [detailPop2, setDetailPop2] = useState(false);

    const openDetailPop1 = () => {
        setDetailPop1(true);
    }
    const closeDetailPop1 = () => {
        setDetailPop1(false);
    }
    const openDetailPop2 = () => {
        setDetailPop2(true);
    }
    const closeDetailPop2 = () => {
        setDetailPop2(false);
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

            <div className='contents_inner'>

                <article className='inner_top'>
                    <div className='dflx_jbet'>
                        <div className='inner_title'>
                            <h1 className='h1_b24'>NetZ 안양공장</h1>
                        </div>
                    </div>
                </article>

                <article className='contents_body'>

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
                            <SelectComponent className={'selector sm'}>
                                <option value="">2020년</option>
                                <option value="">2021년</option>
                                <option value="" selected>2022년</option>
                            </SelectComponent>
                            <ButtonComponent className={'btn_srch m-l-8'} txt={'검색'} />
                        </div>
                        <div className='cotop_right'></div>
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
                            <article className='analy_charts3'>
                                <div className='analy_body'>
                                    <div className='chart_top'>
                                        <h3 className='h3_b16'>월별 온실가스 배출량</h3>
                                    </div>
                                    <section className='doub_chart_wrap'>
                                        <div className='sales_chart_rcd'>
                                            <div className='sales_dispose'>
                                                <div className='dispose_result'>
                                                    <h1 className='vol_count'>2,380</h1>
                                                    <span className='chart_unit'>tCO₂eq</span>
                                                </div>
                                                <span className='date dash'>2022년 11월</span>
                                                <SelectMiniComponent className={'selector unit_selt trans'}>
                                                    <option value="">전 체</option>
                                                    <option value="">Scope1</option>
                                                    <option value="">Scope2</option>
                                                    <option value="">Scope3</option>
                                                </SelectMiniComponent>
                                            </div>
                                        </div>
                                        <div className='chart_cont'>
                                            <SalesChart />
                                        </div>
                                    </section>
                                </div>
                                <div className='analy_body'>
                                    <div className='chart_top'>
                                        <h3 className='h3_b16'>Scope1. 배출시설 현황</h3>
                                        <a onClick={openDetailPop1} className='see_more'>
                                            <p className='plus20'>
                                                <ImgComponent src={'circ20_plus.svg'} />
                                            </p>
                                            <span className='chart_unit'>자세히보기</span>
                                        </a>
                                    </div>
                                    <section className='chart_wrap'>
                                        <article className='status_vert_wrap'>
                                            <div className='chart_cont'>
                                                <RatioChart4 />
                                            </div>
                                        </article>
                                    </section>
                                </div>
                                <div className='analy_body'>
                                    <div className='chart_top'>
                                        <h3 className='h3_b16'>Scope2. 배출시설 현황</h3>
                                        <a onClick={openDetailPop2} className='see_more'>
                                            <p className='plus20'>
                                                <ImgComponent src={'circ20_plus.svg'} />
                                            </p>
                                            <span className='chart_unit'>자세히보기</span>
                                        </a>
                                    </div>
                                    <section className='chart_wrap'>
                                        <article className='status_vert_wrap'>
                                            <div className='chart_cont'>
                                                <RatioChart5 />
                                            </div>
                                        </article>
                                    </section>
                                </div>
                                <div className='analy_body'>
                                    <div className='chart_top'>
                                        <h3 className='h3_b16'>월별 매출대비 온실가스 배출량</h3>
                                    </div>
                                    <section className='doub_chart_wrap'>
                                        <div className='sales_chart_rcd'>
                                            <div className='sales_dispose'>
                                                <div className='dispose_result'>
                                                    <h1 className='vol_count'>80</h1>
                                                    <span className='chart_unit'>tCO₂eq/억</span>
                                                </div>
                                                <span className='date dash'>2022년 11월</span>
                                            </div>
                                        </div>
                                        <div className='chart_cont'>
                                            <SalesChart01 />
                                        </div>
                                    </section>
                                </div>
                                <div className='analy_body'>
                                    <div className='chart_top'>
                                        <h3 className='h3_b16'>기준년도 대비 연간 온실가스 배출량</h3>
                                        <a onClick={() => navigator('')} className='see_more'>
                                            <p className='plus20'>
                                                <ImgComponent src={'circ20_plus.svg'} />
                                            </p>
                                            <span className='chart_unit'>자세히보기</span>
                                        </a>
                                    </div>
                                    <section className='chart_wrap'>
                                        <div className='chart_cont scroll sc_x'>
                                            <SalseChart3 />
                                        </div>
                                    </section>
                                </div>

                                <div className='analy_body'>
                                    <div className='chart_top'>
                                        <h3 className='h3_b16'>사업장별 배출량 비교</h3>
                                        <span className='chart_unit'>(tCO₂eq/백만)</span>
                                    </div>
                                    <section className='chart_wrap'>
                                        <div className='chart_cont'>
                                            <BoundaryChart1 />
                                        </div>
                                    </section>
                                </div>
                            </article>
                        </div>
                    </section>

                </article>

            </div>

            <PopScope1 open={detailPop1} close={closeDetailPop1} />
            <PopScope2 open={detailPop2} close={closeDetailPop2} />
        </div>
    );
}

export default Dashboard;
