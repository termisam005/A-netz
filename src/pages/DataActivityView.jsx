import React, { Component } from 'react';
import { useState } from 'react';
import Header from '../component/layout/Header';
import Aside from '../component/layout/Aside';
import ButtonComponent from '../component/common/ButtonComponent';
import SelectComponent from '../component/common/SelectComponent';
import ThListActivity from '../component/list/ThListActivity';
import TrListActivity from '../component/list/TrListActivity';
import PagingComponent from '../component/common/PagingComponent';
import ScopeChart1 from '../component/chart/ScopeChart1';
import ScopeChart2 from '../component/chart/ScopeChart2';


const DataActivityView = () => {

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
                            <h1 className='h1_b24'>배출원 활동자료 조회</h1>
                            <p className='explain op1'>온실가스 배출량 지난 데이터를 조회할 수 있습니다.</p>
                        </div>
                    </div>
                </article>

                <article className="tab_body on">
                    <section className='conts_top'>
                        <div className='cotop_left'>

                            <div className='date_put_wrap'>
                                <dl className='date_put_dl'>
                                    <dd>
                                        <SelectComponent className={'selector short m-r-4'}>
                                            <option value="">기업전체</option>
                                            <option value="">본사</option>
                                            <option value="">서울1공장</option>
                                            <option value="">서울2공장</option>
                                            <option value="">부산공장</option>
                                        </SelectComponent>
                                        <SelectComponent className={'selector sm'}>
                                            <option value="">2020년</option>
                                            <option value="">2021년</option>
                                            <option value="" selected>2022년</option>
                                        </SelectComponent>
                                        <ButtonComponent className={'btn_srch m-l-8'} txt={'검색'} />
                                    </dd>
                                </dl>
                            </div>

                        </div>
                        <div className='cotop_right'>
                            {/* <div className='date_put_wrap'>
                                <dl className='date_put_dl'>
                                    <dd>
                                        <div className='grd_date_sett'>
                                            <SelectComponent className={'selector sm'}>
                                                <option value="">엑셀</option>
                                                <option value="">명세서</option>
                                            </SelectComponent>
                                            <SelectComponent className={'selector sm'}>
                                                <option value="">2020년</option>
                                                <option value="">2021년</option>
                                                <option value="" selected>2022년</option>
                                            </SelectComponent>
                                            <SelectComponent className={'selector sm'}>
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
                                        <ButtonComponent className={'btn_srch m-l-8'} txt={'다운로드'} />
                                    </dd>
                                </dl>
                            </div> */}
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
                            <section className='contents'>

                                <div className='conts_body'>
                                    <div className='table_cont hauto scroll'>
                                        <caption className='caption_title'>
                                            본사
                                        </caption>
                                        <article className='group_scope'>
                                            <div className='gr_scope_line'>
                                                <h5 className='scope_total'>
                                                    <span>80,000</span>
                                                    <span className='decimal'>.0000</span>
                                                </h5>
                                                <div className='scope_text'>
                                                    <span>Scope1</span>
                                                    <span className='scope_count sc1'>20,000</span>
                                                </div>
                                                <div className='scope_text'>
                                                    <span>Scope2</span>
                                                    <span className='scope_count sc2'>20,000</span>
                                                </div>
                                                <div className='scope_text'>
                                                    <span>Scope3</span>
                                                    <span className='scope_count sc3'>0</span>
                                                </div>
                                            </div>
                                        </article>
                                        <table className='netz_table activity_table'>
                                            <ThListActivity />
                                            <tbody>
                                                <TrListActivity operation={'Scope1'} comb={'고정연소'} organ={'본관'} facility={'난방보일러 1'} fuel={'도시가스(LNG)'}
                                                unit={'tCO₂eq'} total01={'116,760.00'} total02={'116,760.00'} 
                                                jan01={'97,343,566.00'} jan02={'97,343,566.00'} feb01={'97,343,566.00'} feb02={'97,343,566.00'}
                                                mar01={'97,343,566.00'} mar02={'97,343,566.00'} apr01={'97,343,566.00'} apr02={'97,343,566.00'}
                                                may01={'97,343,566.00'} may02={'97,343,566.00'} jun01={'97,343,566.00'} jun02={'97,343,566.00'}
                                                jul01={'97,343,566.00'} jul02={'97,343,566.00'} aug01={'97,343,566.00'} aug02={'97,343,566.00'}
                                                sep01={'97,343,566.00'} sep02={'97,343,566.00'} oct01={'97,343,566.00'} oct02={'97,343,566.00'}
                                                nov01={'97,343,566.00'} nov02={'97,343,566.00'} dec01={'97,343,566.00'} dec02={'97,343,566.00fsf'}
                                                />
                                                <TrListActivity operation={'Scope2'} comb={'외부전기'} organ={'본관'} facility={'사업장단위사용시설'} fuel={'외부전기'}
                                                unit={'tCO₂eq'} total01={'1,168,122,792.00'} total02={'1,168,122,792.00'} 
                                                jan01={'97,343,566.00'} jan02={'97,343,566.00'} feb01={'97,343,566.00'} feb02={'97,343,566.00'}
                                                mar01={'97,343,566.00'} mar02={'97,343,566.00'} apr01={'97,343,566.00'} apr02={'97,343,566.00'}
                                                may01={'97,343,566.00'} may02={'97,343,566.00'} jun01={'97,343,566.00'} jun02={'97,343,566.00'}
                                                jul01={'97,343,566.00'} jul02={'97,343,566.00'} aug01={'97,343,566.00'} aug02={'97,343,566.00'}
                                                sep01={'97,343,566.00'} sep02={'97,343,566.00'} oct01={'97,343,566.00'} oct02={'97,343,566.00'}
                                                nov01={'97,343,566.00'} nov02={'97,343,566.00'} dec01={'97,343,566.00'} dec02={'97,343,566.00fsf'}
                                                />
                                                <TrListActivity operation={'Scope1'} comb={'고정연소'} organ={'본관'} facility={'난방보일러 1'} fuel={'도시가스(LNG)'}
                                                unit={'tCO₂eq'} total01={'116,760.00'} total02={'116,760.00'} 
                                                jan01={'97,343,566.00'} jan02={'97,343,566.00'} feb01={'97,343,566.00'} feb02={'97,343,566.00'}
                                                mar01={'97,343,566.00'} mar02={'97,343,566.00'} apr01={'97,343,566.00'} apr02={'97,343,566.00'}
                                                may01={'97,343,566.00'} may02={'97,343,566.00'} jun01={'97,343,566.00'} jun02={'97,343,566.00'}
                                                jul01={'97,343,566.00'} jul02={'97,343,566.00'} aug01={'97,343,566.00'} aug02={'97,343,566.00'}
                                                sep01={'97,343,566.00'} sep02={'97,343,566.00'} oct01={'97,343,566.00'} oct02={'97,343,566.00'}
                                                nov01={'97,343,566.00'} nov02={'97,343,566.00'} dec01={'97,343,566.00'} dec02={'97,343,566.00fsf'}
                                                />
                                                <TrListActivity operation={'Scope2'} comb={'외부전기'} organ={'본관'} facility={'사업장단위사용시설'} fuel={'외부전기'}
                                                unit={'tCO₂eq'} total01={'1,168,122,792.00'} total02={'1,168,122,792.00'} 
                                                jan01={'97,343,566.00'} jan02={'97,343,566.00'} feb01={'97,343,566.00'} feb02={'97,343,566.00'}
                                                mar01={'97,343,566.00'} mar02={'97,343,566.00'} apr01={'97,343,566.00'} apr02={'97,343,566.00'}
                                                may01={'97,343,566.00'} may02={'97,343,566.00'} jun01={'97,343,566.00'} jun02={'97,343,566.00'}
                                                jul01={'97,343,566.00'} jul02={'97,343,566.00'} aug01={'97,343,566.00'} aug02={'97,343,566.00'}
                                                sep01={'97,343,566.00'} sep02={'97,343,566.00'} oct01={'97,343,566.00'} oct02={'97,343,566.00'}
                                                nov01={'97,343,566.00'} nov02={'97,343,566.00'} dec01={'97,343,566.00'} dec02={'97,343,566.00fsf'}
                                                />
                                                <TrListActivity operation={'Scope1'} comb={'고정연소'} organ={'본관'} facility={'난방보일러 1'} fuel={'도시가스(LNG)'}
                                                unit={'tCO₂eq'} total01={'116,760.00'} total02={'116,760.00'} 
                                                jan01={'97,343,566.00'} jan02={'97,343,566.00'} feb01={'97,343,566.00'} feb02={'97,343,566.00'}
                                                mar01={'97,343,566.00'} mar02={'97,343,566.00'} apr01={'97,343,566.00'} apr02={'97,343,566.00'}
                                                may01={'97,343,566.00'} may02={'97,343,566.00'} jun01={'97,343,566.00'} jun02={'97,343,566.00'}
                                                jul01={'97,343,566.00'} jul02={'97,343,566.00'} aug01={'97,343,566.00'} aug02={'97,343,566.00'}
                                                sep01={'97,343,566.00'} sep02={'97,343,566.00'} oct01={'97,343,566.00'} oct02={'97,343,566.00'}
                                                nov01={'97,343,566.00'} nov02={'97,343,566.00'} dec01={'97,343,566.00'} dec02={'97,343,566.00fsf'}
                                                />
                                                <TrListActivity operation={'Scope2'} comb={'외부전기'} organ={'본관'} facility={'사업장단위사용시설'} fuel={'외부전기'}
                                                unit={'tCO₂eq'} total01={'1,168,122,792.00'} total02={'1,168,122,792.00'} 
                                                jan01={'97,343,566.00'} jan02={'97,343,566.00'} feb01={'97,343,566.00'} feb02={'97,343,566.00'}
                                                mar01={'97,343,566.00'} mar02={'97,343,566.00'} apr01={'97,343,566.00'} apr02={'97,343,566.00'}
                                                may01={'97,343,566.00'} may02={'97,343,566.00'} jun01={'97,343,566.00'} jun02={'97,343,566.00'}
                                                jul01={'97,343,566.00'} jul02={'97,343,566.00'} aug01={'97,343,566.00'} aug02={'97,343,566.00'}
                                                sep01={'97,343,566.00'} sep02={'97,343,566.00'} oct01={'97,343,566.00'} oct02={'97,343,566.00'}
                                                nov01={'97,343,566.00'} nov02={'97,343,566.00'} dec01={'97,343,566.00'} dec02={'97,343,566.00fsf'}
                                                />
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* <div class="paging_space">
                                        <PagingComponent />
                                    </div> */}
                                </div>

                                <div className='conts_body m-t-20'>
                                    <div className='table_cont hauto scroll'>
                                        <caption className='caption_title'>
                                            서울1공장
                                        </caption>
                                        <article className='group_scope'>
                                            <div className='gr_scope_line'>
                                                <h5 className='scope_total'>
                                                    <span>85,000</span>
                                                    <span className='decimal'>.0000</span>
                                                </h5>
                                                <div className='scope_text'>
                                                    <span>Scope1</span>
                                                    <span className='scope_count sc1'>20,000</span>
                                                </div>
                                                <div className='scope_text'>
                                                    <span>Scope2</span>
                                                    <span className='scope_count sc2'>20,000</span>
                                                </div>
                                                <div className='scope_text'>
                                                    <span>Scope3</span>
                                                    <span className='scope_count sc3'>5,000</span>
                                                </div>
                                            </div>
                                        </article>
                                        <table className='netz_table activity_table'>
                                            <ThListActivity />
                                            <tbody>
                                                <TrListActivity operation={'Scope1'} comb={'고정연소'} organ={'본관'} facility={'난방보일러 1'} fuel={'도시가스(LNG)'}
                                                unit={'tCO₂eq'} total01={'116,760.00'} total02={'116,760.00'} 
                                                jan01={'97,343,566.00'} jan02={'97,343,566.00'} feb01={'97,343,566.00'} feb02={'97,343,566.00'}
                                                mar01={'97,343,566.00'} mar02={'97,343,566.00'} apr01={'97,343,566.00'} apr02={'97,343,566.00'}
                                                may01={'97,343,566.00'} may02={'97,343,566.00'} jun01={'97,343,566.00'} jun02={'97,343,566.00'}
                                                jul01={'97,343,566.00'} jul02={'97,343,566.00'} aug01={'97,343,566.00'} aug02={'97,343,566.00'}
                                                sep01={'97,343,566.00'} sep02={'97,343,566.00'} oct01={'97,343,566.00'} oct02={'97,343,566.00'}
                                                nov01={'97,343,566.00'} nov02={'97,343,566.00'} dec01={'97,343,566.00'} dec02={'97,343,566.00fsf'}
                                                />
                                                <TrListActivity operation={'Scope2'} comb={'외부전기'} organ={'본관'} facility={'사업장단위사용시설'} fuel={'외부전기'}
                                                unit={'tCO₂eq'} total01={'1,168,122,792.00'} total02={'1,168,122,792.00'} 
                                                jan01={'97,343,566.00'} jan02={'97,343,566.00'} feb01={'97,343,566.00'} feb02={'97,343,566.00'}
                                                mar01={'97,343,566.00'} mar02={'97,343,566.00'} apr01={'97,343,566.00'} apr02={'97,343,566.00'}
                                                may01={'97,343,566.00'} may02={'97,343,566.00'} jun01={'97,343,566.00'} jun02={'97,343,566.00'}
                                                jul01={'97,343,566.00'} jul02={'97,343,566.00'} aug01={'97,343,566.00'} aug02={'97,343,566.00'}
                                                sep01={'97,343,566.00'} sep02={'97,343,566.00'} oct01={'97,343,566.00'} oct02={'97,343,566.00'}
                                                nov01={'97,343,566.00'} nov02={'97,343,566.00'} dec01={'97,343,566.00'} dec02={'97,343,566.00fsf'}
                                                />
                                                <TrListActivity operation={'Scope1'} comb={'고정연소'} organ={'본관'} facility={'난방보일러 1'} fuel={'도시가스(LNG)'}
                                                unit={'tCO₂eq'} total01={'116,760.00'} total02={'116,760.00'} 
                                                jan01={'97,343,566.00'} jan02={'97,343,566.00'} feb01={'97,343,566.00'} feb02={'97,343,566.00'}
                                                mar01={'97,343,566.00'} mar02={'97,343,566.00'} apr01={'97,343,566.00'} apr02={'97,343,566.00'}
                                                may01={'97,343,566.00'} may02={'97,343,566.00'} jun01={'97,343,566.00'} jun02={'97,343,566.00'}
                                                jul01={'97,343,566.00'} jul02={'97,343,566.00'} aug01={'97,343,566.00'} aug02={'97,343,566.00'}
                                                sep01={'97,343,566.00'} sep02={'97,343,566.00'} oct01={'97,343,566.00'} oct02={'97,343,566.00'}
                                                nov01={'97,343,566.00'} nov02={'97,343,566.00'} dec01={'97,343,566.00'} dec02={'97,343,566.00fsf'}
                                                />
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className='conts_body m-t-20'>
                                    <div className='table_cont hauto scroll'>
                                        <caption className='caption_title'>
                                            서울2공장
                                        </caption>
                                        <article className='group_scope'>
                                            <div className='gr_scope_line'>
                                                <h5 className='scope_total'>
                                                    <span>80,000</span>
                                                    <span className='decimal'>.0000</span>
                                                </h5>
                                                <div className='scope_text'>
                                                    <span>Scope1</span>
                                                    <span className='scope_count sc1'>20,000</span>
                                                </div>
                                                <div className='scope_text'>
                                                    <span>Scope2</span>
                                                    <span className='scope_count sc2'>20,000</span>
                                                </div>
                                                <div className='scope_text'>
                                                    <span>Scope3</span>
                                                    <span className='scope_count sc3'>0</span>
                                                </div>
                                            </div>
                                        </article>
                                        <table className='netz_table activity_table'>
                                            <ThListActivity />
                                            <tbody>
                                                <TrListActivity operation={'Scope1'} comb={'고정연소'} organ={'본관'} facility={'난방보일러 1'} fuel={'도시가스(LNG)'}
                                                unit={'tCO₂eq'} total01={'116,760.00'} total02={'116,760.00'} 
                                                jan01={'97,343,566.00'} jan02={'97,343,566.00'} feb01={'97,343,566.00'} feb02={'97,343,566.00'}
                                                mar01={'97,343,566.00'} mar02={'97,343,566.00'} apr01={'97,343,566.00'} apr02={'97,343,566.00'}
                                                may01={'97,343,566.00'} may02={'97,343,566.00'} jun01={'97,343,566.00'} jun02={'97,343,566.00'}
                                                jul01={'97,343,566.00'} jul02={'97,343,566.00'} aug01={'97,343,566.00'} aug02={'97,343,566.00'}
                                                sep01={'97,343,566.00'} sep02={'97,343,566.00'} oct01={'97,343,566.00'} oct02={'97,343,566.00'}
                                                nov01={'97,343,566.00'} nov02={'97,343,566.00'} dec01={'97,343,566.00'} dec02={'97,343,566.00fsf'}
                                                />
                                                <TrListActivity operation={'Scope2'} comb={'외부전기'} organ={'본관'} facility={'사업장단위사용시설'} fuel={'외부전기'}
                                                unit={'tCO₂eq'} total01={'1,168,122,792.00'} total02={'1,168,122,792.00'} 
                                                jan01={'97,343,566.00'} jan02={'97,343,566.00'} feb01={'97,343,566.00'} feb02={'97,343,566.00'}
                                                mar01={'97,343,566.00'} mar02={'97,343,566.00'} apr01={'97,343,566.00'} apr02={'97,343,566.00'}
                                                may01={'97,343,566.00'} may02={'97,343,566.00'} jun01={'97,343,566.00'} jun02={'97,343,566.00'}
                                                jul01={'97,343,566.00'} jul02={'97,343,566.00'} aug01={'97,343,566.00'} aug02={'97,343,566.00'}
                                                sep01={'97,343,566.00'} sep02={'97,343,566.00'} oct01={'97,343,566.00'} oct02={'97,343,566.00'}
                                                nov01={'97,343,566.00'} nov02={'97,343,566.00'} dec01={'97,343,566.00'} dec02={'97,343,566.00fsf'}
                                                />
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </section>
                </article>

            </div>
        </div>
    );
}

export default DataActivityView;
