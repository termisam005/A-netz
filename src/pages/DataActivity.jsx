import React, { Component } from 'react';
import { useState } from 'react';
import Header from '../component/layout/Header';
import Aside from '../component/layout/Aside';
import InputComponent from '../component/common/InputComponent';
import ButtonComponent from '../component/common/ButtonComponent';
import SelectComponent from '../component/common/SelectComponent';
import SelectMiniComponent from '../component/common/SelectMiniComponent';
import TrDataActivity from '../component/list/TrDataActivity';
import TrDataActivityPut from '../component/list/TrDataActivityPut';


const DataActivity = () => {

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
                            <h1 className='h1_b24'>배출원 활동자료 입력</h1>
                        </div>
                        <div className='inner_btzone'></div>
                    </div>
                </article>

                <article className="tab_body on">
                    <section className='conts_top'>
                        <div className='cotop_left'>
                            <SelectComponent className={'selector short'}>
                                <option value="">전체선택</option>
                                <option value="" selected>서울공장</option>
                                <option value="">부산공장</option>
                            </SelectComponent>
                        </div>
                        <div className='cotop_right'>
                            <div className='date_put_wrap'>
                                <dl className='date_put_dl'>
                                    <dt>
                                        <span>입력기간</span>
                                    </dt>
                                    <dd>
                                        <div className='grd_month_set'>
                                            <SelectComponent className={'selector'}>
                                                <option value="">2020년</option>
                                                <option value="">2021년</option>
                                                <option value="" selected>2022년</option>
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
                                    </dd>
                                </dl>
                                <dl className='date_put_dl m-l-40'>
                                    <dt>
                                        <span>매출(천만원)</span>
                                    </dt>
                                    <dd>
                                        <InputComponent className={'wrput total w120'} value={'0'} />
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </section>
                    <section className='contents'>
                        <div className='list_contain'>
                            <div className='contain_top'>
                                <article className='dflx_ac_jbet h-100'>
                                    {/* <h3 className='h3_m16'>본관</h3> */}
                                    <SelectMiniComponent className={'selector unit_selt trans'}>
                                        <option value="">조직선택</option>
                                        <option value="" selected>본관</option>
                                        <option value="">생산동</option>
                                        <option value="">식당</option>
                                    </SelectMiniComponent>
                                </article>
                            </div>
                            <div className='contain_body'>
                                <article className='datas_cont'>
                                    <table className='netz_table datas_table'>
                                        <thead>
                                            <th>Scope구분</th>
                                            <th>배출활동</th>
                                            <th>배출 시설명</th>
                                            <th>에너지 종류</th>
                                            <th>연료/폐기물</th>
                                            <th>사용량</th>
                                            <th>단위</th>
                                            <th>
                                                재활용 비율<span className='unit'>(0~100%)</span>
                                            </th>
                                            <th>산정등급</th>
                                            <th>명세서</th>
                                        </thead>
                                        <tbody>
                                            <TrDataActivityPut />
                                            <TrDataActivityPut />
                                            <TrDataActivityPut />
                                        </tbody>
                                    </table>
                                </article>
                            </div>
                        </div>

                        <div className='list_contain'>
                            <div className='contain_top'>
                                <article className='dflx_ac_jbet h-100'>
                                    <SelectMiniComponent className={'selector unit_selt trans'}>
                                        <option value="" selected>조직선택</option>
                                        <option value="">본관</option>
                                        <option value="">생산동</option>
                                        <option value="">식당</option>
                                    </SelectMiniComponent>
                                </article>
                            </div>
                            <div className='contain_body'>
                                <article className='datas_cont'>
                                    <table className='netz_table datas_table'>
                                        <thead>
                                            <th>Scope구분</th>
                                            <th>배출활동</th>
                                            <th>배출 시설명</th>
                                            <th>에너지 종류</th>
                                            <th>연료/폐기물</th>
                                            <th>사용량</th>
                                            <th>단위</th>
                                            <th>
                                                재활용 비율<span className='unit'>(0~100%)</span>
                                            </th>
                                            <th>산정등급</th>
                                            <th>명세서</th>
                                        </thead>
                                        <tbody>
                                            <TrDataActivityPut />
                                            <TrDataActivityPut />
                                            <TrDataActivityPut />
                                        </tbody>
                                    </table>
                                </article>
                            </div>
                        </div>

                        <div className='btzone_last'>
                            <ButtonComponent type={''} className={'btn_default med wht'} txt={'전체 초기화'} />
                            <ButtonComponent type={''} className={'btn_default med'} txt={'분석'} />
                        </div>
                    </section>
                </article>

            </div>
        </div>
    );
}

export default DataActivity;
