import React, { Component, Fragment } from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonComponent from '../common/ButtonComponent';
import ButtonPlusComponent from '../common/ButtonPlusComponent';
import InputComponent from '../common/InputComponent';
import SelectComponent from '../common/SelectComponent';


const PopOrganRepair = ({ open, close }) => {

    //관련문서 등록
    const [organRepairPop, setOrganRepair] = useState(true);
    const [organDocuPop, setOrganDocu] = useState(false);

    const openOrganDocu = () => {
        setOrganDocu(true);
        setOrganRepair(false);
    }
    const closeOrganDocu =() => {
        setOrganDocu(false);
        setOrganRepair(true);
    }

    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>

            <div className={organRepairPop? "pop_body pop_medium_new" : "pop_body none pop_medium_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">조직 수정</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_grey'>
                        <dl className='dl_enroll'>
                            <dt>사업장</dt>
                            <dd>
                                <InputComponent className={'wrput'} value={'서울1공장'} />
                            </dd>
                        </dl>
                        <dl className='dl_enroll'>
                            <dt>소유 형태</dt>
                            <dd>
                                <SelectComponent className={'selector'}>
                                    <option value="">선택</option>
                                    <option value="">선택</option>
                                    <option value="">선택</option>
                                </SelectComponent>
                            </dd>
                        </dl>
                        <dl className='dl_enroll'>
                            <dt>설정 기준</dt>
                            <dd>
                                <div className='grd_selt_sett'>
                                    <SelectComponent className={'selector'}>
                                        <option value="">선택</option>
                                        <option value="" selected>지분할당</option>
                                        <option value="">운영통제</option>
                                        <option value="">재정통제</option>
                                    </SelectComponent>
                                    <div className='dflx_ae_jbet'>
                                        <InputComponent className={'wrput w-80'} placeholder={'0'} />
                                        <span className='unit'>%</span>
                                    </div> 
                                </div>
                            </dd>
                        </dl>
                    </section>
                    <section className='popn_contain org_enorll scroll'>
                        <dl className='dl_enroll top'>
                            <dt>유형</dt>
                            <dd>
                                <span className='tlt'>구역</span>
                            </dd>
                        </dl>
                        <dl className='dl_enroll trans'>
                            <dt className='p-r-4'>
                                <SelectComponent className={'selector'}>
                                    <option value="">선택</option>
                                    <option value="">건물</option>
                                    <option value="">자량</option>
                                </SelectComponent>
                            </dt>
                            <dd>
                                <InputComponent className={'wrput'} value={'본관'} />
                            </dd>
                            <span className='put_check put_delete'>
                                <ImgComponent src={'del12_circle.svg'} />
                            </span>
                        </dl>
                        <dl className='dl_enroll trans'>
                            <dt className='p-r-4'>
                                <SelectComponent className={'selector'}>
                                    <option value="">선택</option>
                                    <option value="" selected>건물</option>
                                    <option value="">자량</option>
                                </SelectComponent>
                            </dt>
                            <dd>
                                <InputComponent className={'wrput'} value={'본관'} />
                            </dd>
                            <span className='put_check put_delete'>
                                <ImgComponent src={'del12_circle.svg'} />
                            </span>
                        </dl>
                        <dl className='dl_enroll trans'>
                            <dt className='p-r-4'>
                                <SelectComponent className={'selector'}>
                                    <option value="">선택</option>
                                    <option value="" selected>건물</option>
                                    <option value="">자량</option>
                                </SelectComponent>
                            </dt>
                            <dd>
                                <InputComponent className={'wrput'} value={'화물차'} />
                            </dd>
                            <span className='put_check put_delete'>
                                <ImgComponent src={'del12_circle.svg'} />
                            </span>
                        </dl>
                        <dl className='dl_enroll trans'>
                            <dt className='p-r-4'>
                                <SelectComponent className={'selector'}>
                                    <option value="">선택</option>
                                    <option value="">건물</option>
                                    <option value="" selected>자량</option>
                                </SelectComponent>
                            </dt>
                            <dd>
                                <InputComponent className={'wrput'} value={'화물차'} />
                            </dd>
                            <span className='put_check put_delete'>
                                <ImgComponent src={'del12_circle.svg'} />
                            </span>
                        </dl>  
                        <div className='plus_zone'>
                            <ButtonPlusComponent type={'button'} onClick={''} className={'btn_default wht plus24'} />
                        </div>
                    </section>
                </div>
                <div className="popn_bottom">
                    <button onClick={close} className="btn_default wht">닫기</button>
                    <button onClick={openOrganDocu} className="btn_default">다음</button>
                </div>
            </div>

            <div className={organDocuPop? "pop_body pop_medium_new" : "pop_body none pop_medium_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <p onClick={closeOrganDocu} className='popn_back'>
                        <ImgComponent src={'arr_left_back.svg'} />
                    </p>
                    <h2 className="h2_b20">관련문서 등록</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_grey'>
                        <p className='pgrey_txt'>서울1공장</p>
                    </section>
                    <section className='popn_contain org_related scroll'>
                        <dl className='dl_enroll'>
                            <dd>
                                <span className='tlt w-40'>문서종류</span>
                                <span className='tlt w-20'>파일첨부</span>
                                <span className='tlt w-40 p-l-4'>파일명</span>
                            </dd>
                        </dl>
                        <div className='enroll_file_line'>
                            <div className='input_sett'>
                                <InputComponent className={'wrput'} />
                                <ButtonComponent className={'btn_default sm blgrey'} txt={'파일첨부'} onClick={''} />
                            </div>
                            <div className='file_result half'>
                                <p className='p_r12'>2022_12_15 차량관리대장.pdf</p>
                                <span className='put_check put_delete'>
                                    <ImgComponent src={'del12_circle.svg'} />
                                </span>
                            </div>
                        </div>
                        <div className='enroll_file_line'>
                            <div className='input_sett'>
                                <InputComponent className={'wrput'} />
                                <ButtonComponent className={'btn_default sm blgrey'} txt={'파일첨부'} onClick={''} />
                            </div>
                            <div className='file_result half'>
                                <p className='p_r12'>등기부등본.jpg</p>
                                <span className='put_check put_delete'>
                                    <ImgComponent src={'del12_circle.svg'} />
                                </span>
                            </div>
                        </div>
                        <div className='enroll_file_line'>
                            <div className='input_sett'>
                                <InputComponent className={'wrput'} />
                                <ButtonComponent className={'btn_default sm blgrey'} txt={'파일첨부'} onClick={''} />
                            </div>
                            <div className='file_result half'>
                                <p className='p_r12'>1공장 시설배치도.pdf</p>
                                <span className='put_check put_delete'>
                                    <ImgComponent src={'del12_circle.svg'} />
                                </span>
                            </div>
                        </div>
                        <div className='plus_zone'>
                            <ButtonPlusComponent type={'button'} onClick={''} className={'btn_default wht plus24'} />
                        </div>
                    </section>
                </div>
                <div className="popn_bottom">
                    <button onClick={closeOrganDocu} className="btn_default wht">이전</button>
                    <button onClick={close} className="btn_default">등록</button>
                </div>
            </div>

        </div>
    )
}

export default PopOrganRepair;

