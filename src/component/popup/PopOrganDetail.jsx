import React, { Component, Fragment } from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonComponent from '../common/ButtonComponent';
import InputComponent from '../common/InputComponent';
import SelectComponent from '../common/SelectComponent';
import DocuListComponent from '../common/DocuListComponent';


const PopOrganDetail = ({ open, close }) => {

    //관련문서
    const [organDetailPop, setOrganDetail] = useState(true);
    const [organDocuPop, setOrganDocu] = useState(false);

    const openOrganDocu = () => {
        setOrganDocu(true);
        setOrganDetail(false);
    }
    const closeOrganDocu =() => {
        setOrganDocu(false);
        setOrganDetail(true);
    }

    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>

            <div className={organDetailPop? "pop_body pop_medium_new" : "pop_body none pop_medium_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">조직 상세보기</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_grey'>
                        <dl className='dl_enroll trans'>
                            <dt>사업장</dt>
                            <dd>
                                <p className='p_b14'>서울1공장</p>
                            </dd>
                        </dl>
                        <dl className='dl_enroll trans'>
                            <dt>소유 형태</dt>
                            <dd>
                                <p className='p_b14'>생산공장</p>
                            </dd>
                        </dl>
                        <dl className='dl_enroll trans'>
                            <dt>설정 기준</dt>
                            <dd>
                                <p className='p_b14'>지분할당 100%</p>
                            </dd>
                        </dl>
                    </section>
                    <section className='popn_contain org_enorll scroll'>
                        <div className='detail_round bord m-b-20'>
                            <table className='netz_table detail_table'>
                                <thead>
                                    <tr>
                                        <th>유형</th>
                                        <th className='tal'>구역명</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className='td_txt'>건물</p>
                                        </td>
                                        <td className='tal'>
                                            <p className='td_txt'>본관</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className='td_txt'>건물</p>
                                        </td>
                                        <td className='tal'>
                                            <p className='td_txt'>생산2동</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className='td_txt'>건물</p>
                                        </td>
                                        <td className='tal'>
                                            <p className='td_txt'>납품화물차1</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
                <div className="popn_bottom">
                    <ButtonComponent onClick={close} className="btn_default wht" txt={'닫기'} />
                    <ButtonComponent onClick={openOrganDocu} className="btn_default" txt={'다음'} />
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
                    <h2 className="h2_b20">관련문서</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_grey'>
                        <p className='pgrey_txt'>서울1공장</p>
                    </section>
                    <section className='popn_contain document scroll'>
                        <DocuListComponent listClass={'docu_list'} dlClass={'docu_dl'} title={'건축물 관리대장'} fileClass={'ducu_file'} fileName={'filename.jpg'} 
                        buttonClass={'btn_default sm blgrey'} buttonTxt={'다운로드'} onClick={''} />
                        <DocuListComponent listClass={'docu_list'} dlClass={'docu_dl'} title={'건축물 관리대장'} fileClass={'ducu_file'} fileName={'filename.jpg'} 
                        buttonClass={'btn_default sm blgrey'} buttonTxt={'다운로드'} onClick={''} />
                        <DocuListComponent listClass={'docu_list'} dlClass={'docu_dl'} title={'건축물 관리대장'} fileClass={'ducu_file'} fileName={'filename.jpg'} 
                        buttonClass={'btn_default sm blgrey'} buttonTxt={'다운로드'} onClick={''} />
                        <DocuListComponent listClass={'docu_list'} dlClass={'docu_dl'} title={'건축물 관리대장'} fileClass={'ducu_file'} fileName={'filename.jpg'} 
                        buttonClass={'btn_default sm blgrey'} buttonTxt={'다운로드'} onClick={''} />
                        <DocuListComponent listClass={'docu_list'} dlClass={'docu_dl'} title={'건축물 관리대장'} fileClass={'ducu_file'} fileName={'filename.jpg'} 
                        buttonClass={'btn_default sm blgrey'} buttonTxt={'다운로드'} onClick={''} />
                        <DocuListComponent listClass={'docu_list'} dlClass={'docu_dl'} title={'건축물 관리대장'} fileClass={'ducu_file'} fileName={'filename.jpg'} 
                        buttonClass={'btn_default sm blgrey'} buttonTxt={'다운로드'} onClick={''} />
                        <DocuListComponent listClass={'docu_list'} dlClass={'docu_dl'} title={'건축물 관리대장'} fileClass={'ducu_file'} fileName={'filename.jpg'} 
                        buttonClass={'btn_default sm blgrey'} buttonTxt={'다운로드'} onClick={''} />
                        <DocuListComponent listClass={'docu_list'} dlClass={'docu_dl'} title={'건축물 관리대장'} fileClass={'ducu_file'} fileName={'filename.jpg'} 
                        buttonClass={'btn_default sm blgrey'} buttonTxt={'다운로드'} onClick={''} />
                    </section>
                </div>
                <div className="popn_bottom">
                    <ButtonComponent onClick={closeOrganDocu} className="btn_default wht" txt={'이전'} />
                    <ButtonComponent onClick={close} className="btn_default" txt={'확인'} />
                </div>
            </div>

        </div>
    )
}

export default PopOrganDetail;

