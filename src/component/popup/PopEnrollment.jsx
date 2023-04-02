import React, { Component } from 'react';
import ImgComponent from '../common/ImgComponent';
import SelectComponent from '../common/SelectComponent';
import InputComponent from '../common/InputComponent';


const PopEnrollment = ({ open, close }) => {

    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>
            <div className="pop_body pop_medium">
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="pop_top">
                    <h2 className="h2_b20">조직/배출시설 등록</h2>
                </div>
                <div className="pop_cont">
                    <section className='pop_enrolls'>
                        <div className='enrolls_cont'>
                            <div className='enrolls_top'>
                                <h3 className='h3_b16'>조직</h3>
                            </div>
                            <div className='enrolls_enroll'>
                                <dl className='dl_enroll'>
                                    <dt className='lett_sp1'>
                                        <div className='dflx_jbet'>
                                            <span>유</span>
                                            <span>형</span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <SelectComponent className={'selector'}>
                                            <option value="0">건물</option>
                                            <option value="1">건물</option>
                                            <option value="2">건물</option>
                                        </SelectComponent>
                                    </dd>
                                </dl>
                                <dl className='dl_enroll'>
                                    <dt>
                                        <div className='dflx_jbet'>
                                            <span>조</span>
                                            <span>직</span>
                                            <span>명</span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <SelectComponent className={'selector'}>
                                            <option value="0">서울공장</option>
                                            <option value="1">서울공장</option>
                                            <option value="2">서울공장</option>
                                        </SelectComponent>
                                    </dd>
                                </dl>
                                <dl className='dl_enroll'>
                                    <dt>
                                        <div className='dflx_jbet'>
                                            <span>조</span>
                                            <span>직</span>
                                            <span>구</span>
                                            <span>분</span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <InputComponent className={'wrput'} />
                                    </dd>
                                </dl>
                                <dl className='dl_enroll'>
                                    <dt>
                                        <div className='dflx_jbet'>
                                            <span>소</span>
                                            <span>유</span>
                                            <span>형</span>
                                            <span>태</span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <SelectComponent className={'selector'}>
                                            <option value="0">생산공장</option>
                                            <option value="1">생산공장</option>
                                            <option value="2">생산공장</option>
                                        </SelectComponent>
                                    </dd>
                                </dl>
                                <dl className='dl_enroll'>
                                    <dt>
                                        <div className='dflx_jbet'>
                                            <span>설</span>
                                            <span>정</span>
                                            <span>기</span>
                                            <span>준</span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <div className='grd_selt_sett'>
                                            <SelectComponent className={'selector'}>
                                                <option value="0">지분할당</option>
                                                <option value="1">지분할당</option>
                                                <option value="2">지분할당</option>
                                            </SelectComponent>
                                            <div className='dflx_ae_jbet'>
                                                <SelectComponent className={'selector w-85'}>
                                                    <option value="0">100</option>
                                                    <option value="1">90</option>
                                                    <option value="2">80</option>
                                                </SelectComponent>
                                                <span className='unit'>%</span>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className='enrolls_cont'>
                            <div className='enrolls_top'>
                                <h3 className='h3_b16'>배출시설</h3>
                            </div>
                            <div className='enrolls_enroll'>
                                <dl className='dl_enroll'>
                                    <dt>
                                        <div className='dflx_jbet'>
                                            <span>구</span>
                                            <span>분</span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <SelectComponent className={'selector'}>
                                            <option value="0">Scope1</option>
                                            <option value="1">Scope2</option>
                                            <option value="2">Scope3</option>
                                        </SelectComponent>
                                    </dd>
                                </dl>
                                <dl className='dl_enroll'>
                                    <dt>
                                        <div className='dflx_jbet'>
                                            <span>연</span>
                                            <span>소</span>
                                            <span>원</span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <SelectComponent className={'selector'}>
                                            <option value="0">고정연소원</option>
                                            <option value="1">고정연소원</option>
                                            <option value="2">고정연소원</option>
                                        </SelectComponent>
                                    </dd>
                                </dl>
                                <dl className='dl_enroll'>
                                    <dt>
                                        <div className='dflx_jbet'>
                                            <span>배</span>
                                            <span>출</span>
                                            <span>시</span>
                                            <span>설</span>
                                            <span>명</span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <InputComponent className={'wrput'} placeholder={'기타입력'} />
                                    </dd>
                                </dl>
                                <dl className='dl_enroll'>
                                    <dt>
                                        <div className='dflx_jbet'>
                                            <span>연</span>
                                            <span>료</span>
                                            <span>/</span>
                                            <span>폐</span>
                                            <span>기</span>
                                            <span>물</span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <SelectComponent className={'selector'}>
                                            <option value="0">도시가스(LNG)</option>
                                            <option value="1">도시가스(LNG)</option>
                                            <option value="2">도시가스(LNG)</option>
                                        </SelectComponent>
                                    </dd>
                                </dl>
                                <dl className='dl_enroll'>
                                    <dt>
                                        <div className='dflx_jbet'>
                                            <span>관</span>
                                            <span>리</span>
                                            <span>코</span>
                                            <span>드</span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <InputComponent className={'wrput'} />
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="pop_bottom">
                    <button onClick={close} className="btn_default wht">취소</button>
                    <button className="btn_default">확인</button>
                </div>
            </div>
        </div>
    )
}

export default PopEnrollment;

