import React, { Component, Fragment } from 'react';
import ImgComponent from '../common/ImgComponent';
import InputComponent from '../common/InputComponent';
import SelectComponent from '../common/SelectComponent';


const PopDischarge = ({ open, close }) => {

    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>

            <div className={"pop_body pop_medium_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">배출시설 등록</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_grey'>
                        <div className='dflx_ac_jbet'>
                            <p className='pgrey_txt'>조직 정보</p>
                            <SelectComponent className={'selector unit_selt mini'}>
                                <option value="">사용</option>
                                <option value="">사용안함</option>
                            </SelectComponent>
                        </div>
                    </section>
                    <section className='popn_contain'>
                        <dl className='dl_enroll trans'>
                            <dt>사업장</dt>
                            <dd>
                                <span className='tlt'>서울1공장</span>
                            </dd>
                        </dl>
                        <dl className='dl_enroll trans'>
                            <dt>소유형태</dt>
                            <dd>
                                <span className='tlt'>생산공장</span>
                            </dd>
                        </dl>
                        <dl className='dl_enroll trans'>
                            <dt>설정기준</dt>
                            <dd>
                                <span className='tlt'>지분할당</span>
                                <span className='tlt m-l-4'>100%</span>
                            </dd>
                        </dl>
                        <dl className='dl_enroll'>
                            <dt className='op07'>유형</dt>
                            <dd>
                                <SelectComponent className={'selector'}>
                                    <option value="">선택</option>
                                    <option value="">건물</option>
                                    <option value="">차량</option>
                                </SelectComponent>
                            </dd>
                        </dl>
                        <dl className='dl_enroll'>
                            <dt className='op07'>구역/차량</dt>
                            <dd>
                                <SelectComponent className={'selector'}>
                                    <option value="">선택</option>
                                    <option value="">본관</option>
                                    <option value="">생산1동</option>
                                </SelectComponent>
                            </dd>
                        </dl>
                    </section>

                    <section className='popn_grey'>
                        <div className='dflx_ac_jbet'>
                            <p className='pgrey_txt'>배출시설 정보</p>
                        </div>
                    </section>
                    <section className='popn_contain'>
                        <dl className='dl_enroll'>
                            <dt className='op07'>Scope</dt>
                            <dd>
                                <SelectComponent className={'selector'}>
                                    <option value="">선택</option>
                                    <option value="">건물</option>
                                    <option value="">차량</option>
                                </SelectComponent>
                            </dd>
                        </dl>
                        <dl className='dl_enroll'>
                            <dt className='op07'>연소원</dt>
                            <dd>
                                <SelectComponent className={'selector'}>
                                    <option value="">선택</option>
                                    <option value="">본관</option>
                                    <option value="">생산1동</option>
                                </SelectComponent>
                            </dd>
                        </dl>
                        <dl className='dl_enroll'>
                            <dt className='op07'>배출시설명</dt>
                            <dd>
                                <InputComponent className={'wrput'} />
                            </dd>
                        </dl>
                        <dl className='dl_enroll'>
                            <dt className='op07'>연료/폐기물</dt>
                            <dd>
                                <SelectComponent className={'selector'}>
                                    <option value="">선택</option>
                                    <option value="">도시가스(LNG)</option>
                                    <option value="">휘발유</option>
                                    <option value="">경유</option>
                                </SelectComponent>
                            </dd>
                        </dl>
                        <dl className='dl_enroll'>
                            <dt className='op07'>시설관리코드</dt>
                            <dd>
                                <InputComponent className={'wrput'} />
                            </dd>
                        </dl>
                    </section>
                </div>
                <div className="popn_bottom">
                    <button onClick={close} className="btn_default wht">닫기</button>
                    <button onClick={close} className="btn_default">저장</button>
                </div>
            </div>

        </div>
    )
}

export default PopDischarge;

