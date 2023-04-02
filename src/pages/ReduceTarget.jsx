import React, { Component } from 'react';
import { useState } from 'react';
import Header from '../component/layout/Header';
import Aside from '../component/layout/Aside';
import ButtonComponent from '../component/common/ButtonComponent';
import ImgComponent from '../component/common/ImgComponent';
import SelectComponent from '../component/common/SelectComponent';
import InputComponent from '../component/common/InputComponent';
import PopTypes from '../component/popup/PopTypes';
import SalesChart4 from '../component/chart/SalesChart4';


const ReduceTarget = () => {

    //당당자 등록
    const [managerPop, setManagerPop] = useState(false);
    const openManager = () => {
        setManagerPop(true);
    }
    const closeManager = () => {
        setManagerPop(false);
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
                            <h1 className='h1_b24'>온실가스 감축목표 설정</h1>
                        </div>
                    </div>
                </article>

                <article className='tab_body on'>

                    <section className='contents'>
                        <div className='anlay_top'>
                            <div className='volume_body'>
                                <article className='reduce_volume'>

                                    <section className='reduce_sett'>
                                        <dl className='dl_enroll'>
                                            <dt className='dflx_ac'>
                                                <span>기준년도</span>
                                            </dt>
                                            <dd>
                                                <div className='grd_selt_sett w-100'>
                                                    <SelectComponent className={'selector'}>
                                                        <option value="">2021년</option>
                                                        <option value="">2022년</option>
                                                    </SelectComponent>
                                                    <div className='dflx_ae_jbet'>
                                                        <InputComponent className={'wrput w-80'} />
                                                        <span className='unit'>%</span>
                                                    </div>
                                                </div>
                                            </dd>
                                        </dl>
                                        <dl className='dl_enroll'>
                                            <dt className='dflx_ac'>
                                                <span>목표 유형</span>
                                                <span className='quest m-l-4' onClick={openManager}>
                                                    <ImgComponent src={'circ16_quest.svg'} />
                                                </span>
                                            </dt>
                                            <dd>
                                                <div className='w-100'>
                                                    <SelectComponent className={'selector w-92'}>
                                                        <option value="" selected>절대적 목표 방식(권장)</option>
                                                        <option value="">배출치 전망치 방식(BAU)</option>
                                                    </SelectComponent>
                                                </div>
                                            </dd>
                                        </dl>
                                        <dl className='dl_enroll'>
                                            <dt className='dflx_ac'>
                                                <span>중간 목표</span>
                                                <span className='mini m-l-4'>(기준년도 대비)</span>
                                            </dt>
                                            <dd>
                                                <div className='grd_selt_sett w-100'>
                                                    <SelectComponent className={'selector'}>
                                                        <option value="">2021년</option>
                                                        <option value="">2022년</option>
                                                    </SelectComponent>
                                                    <div className='dflx_ae_jbet'>
                                                        <InputComponent className={'wrput w-80'} />
                                                        <span className='unit'>%</span>
                                                    </div>
                                                </div>
                                            </dd>
                                        </dl>
                                        <dl className='dl_enroll'>
                                            <dt className='dflx_ac'>
                                                <span>목표 연도</span>
                                                <span className='mini m-l-4'>(기준년도 대비)</span>
                                            </dt>
                                            <dd>
                                                <div className='grd_selt_sett w-100'>
                                                    <SelectComponent className={'selector'}>
                                                        <option value="">2021년</option>
                                                        <option value="">2022년</option>
                                                    </SelectComponent>
                                                    <div className='dflx_ae_jbet'>
                                                        <InputComponent className={'wrput w-80'} />
                                                        <span className='unit'>%</span>
                                                    </div>
                                                </div>
                                            </dd>
                                        </dl>
                                    </section>

                                    <section className='scope_zone'>
                                        <div className='volume_result'>
                                            <div className='top'>
                                                <h3 className='h3_b16'>기준년도</h3>
                                            </div>
                                            <span className='chart_unit'>(tCO₂eq)</span>
                                            <div className='volume_count'>
                                                <h1 className='vol_count bldark'>70,000</h1>
                                                <span className='decimal'>.0000</span>
                                            </div>
                                        </div>
                                    </section>
                                    <section className='scope_zone'>
                                        <div className='volume_result'>
                                            <div className='top'>
                                                <h3 className='h3_b16'>중간목표 연도</h3>
                                                <p className='users_state auto sky m-l-6'>
                                                    <span>30%</span>
                                                    <ImgComponent src={'arrow_down_fill_12.svg'} />
                                                </p>
                                            </div>
                                            <span className='chart_unit'>(tCO₂eq)</span>
                                            <div className='volume_count'>
                                                <h1 className='vol_count sky'>49,000</h1>
                                                <span className='decimal'>.0000</span>
                                            </div>
                                        </div>
                                    </section>
                                    <section className='scope_zone'>
                                        <div className='volume_result'>
                                            <div className='top'>
                                                <h3 className='h3_b16'>목표 연도</h3>
                                                <p className='users_state auto blue m-l-6'>
                                                    <span>30%</span>
                                                    <ImgComponent src={'arrow_down_fill_12.svg'} />
                                                </p>
                                            </div>
                                            <span className='chart_unit'>(tCO₂eq)</span>
                                            <div className='volume_count'>
                                                <h1 className='vol_count blue'>0</h1>
                                                <span className='decimal'>.0000</span>
                                            </div>
                                        </div>
                                    </section>

                                </article>
                                <article className='volume_last'>
                                    <ButtonComponent className={'btn_default med'} txt={'적용'} />
                                </article>
                            </div>
                        </div>
                        <div className='anlay_conts'>
                            <div className='analy_body'>
                                <div className='chart_top'>
                                    <h3 className='h3_b16'>절대적 목표 방식</h3>
                                </div>
                                <section className='chart_wrap reduce'>
                                    <span className='chart_unit'>(tCO₂eq/천)</span>
                                    <div className='chart_cont'>
                                        <SalesChart4 />
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>

                </article>

            </div>

            <PopTypes open={managerPop} close={closeManager} />
        </div>
    );
}

export default ReduceTarget;
