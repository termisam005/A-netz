import React, { Component } from 'react';
import { useState } from 'react';
import Header from '../component/layout/Header';
import Aside from '../component/layout/Aside';
import ButtonComponent from '../component/common/ButtonComponent';
import PagingComponent from '../component/common/PagingComponent';
import ThOrgan from '../component/list/ThOrgan';
import TrOrgan from '../component/list/TrOrgan';

import PopOrganEnroll from '../component/popup/PopOrganEnroll';
import PopDocument from '../component/popup/PopDocument';
import PopOrganDetail from '../component/popup/PopOrganDetail';
import PopOrganRepair from '../component/popup/PopOrganRepair';
import PopMagicOrgan from '../component/popup/PopMagicOrgan';


const SettOrgan = () => {

    //등록마법사
    const [organMagicPop, setOrganMagic] = useState(false);
    const openOrganMagic = () => {
        setOrganMagic(true);
    }
    const closeOrganMagic = () => {
        setOrganMagic(false);
    }

    //조직등록
    const [organEnrollPop, setOrganEnroll] = useState(false);
    const openOrganEnroll = () => {
        setOrganEnroll(true);
    }
    const closeOrganEnroll = () => {
        setOrganEnroll(false);
    }

    //문서보기
    const [docuPop, setDocuPop] = useState(false);
    const openDocument = () => {
        setDocuPop(true);
    }
    const closeDocument = () => {
        setDocuPop(false);
    }

    //상세보기
    const [organDetailPop, setOrganDetail] = useState(false);
    const openDetail = () => {
        setOrganDetail(true);
    }
    const closeDetail = () => {
        setOrganDetail(false);
    }

    //수정
    const [organRepairPop, setOrganReapair] = useState(false);
    const openRepair = () => {
        setOrganReapair(true);
    }
    const closeReapair = () => {
        setOrganReapair(false);
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

            <div className="contents_inner">
                <article className="inner_top">
                    <div className="dflx_jbet">
                        <div className="inner_title">
                            <h1 className="h1_b24">조직 설정</h1>
                            <p className="explain">기업의 조직 설정 및 관리</p>
                        </div>
                        <div className='inner_btzone'>
                            <ButtonComponent type={'button'} className={'btn_default enroll bldark'} txt={'등록마법사'} onClick={openOrganMagic} />
                            <ButtonComponent type={'button'} className={'btn_default enroll'} txt={'조직 등록'} onClick={openOrganEnroll} />
                        </div>
                    </div>
                </article>

                <article className="contents_body">
                    <section className="conts_top">
                        <div className="cotop_left">
                            <div className="tabt_line">
                                <ButtonComponent type={"button"} className={"btn_tab on"} onClick={''} txt={"전체"} />
                                <ButtonComponent type={"button"} className={"btn_tab"} onClick={''} txt={"사용"} />
                                <ButtonComponent type={"button"} className={"btn_tab"} onClick={''} txt={"미사용"} />
                            </div>
                        </div>
                        <div className="cotop_right">
                        </div>
                    </section>

                    <section className="contents">
                        <div className="conts_body">
                            <div className="table_cont scroll">
                                <caption className="caption_title">조직목록</caption> 
                                <table className="netz_table organ_table">
                                    <ThOrgan />
                                    <tbody>
                                        <TrOrgan documentPop={openDocument} detailPop={openDetail} repairPop={openRepair} />
                                        <TrOrgan documentPop={openDocument} detailPop={openDetail} repairPop={openRepair} />
                                        <TrOrgan documentPop={openDocument} detailPop={openDetail} repairPop={openRepair} />
                                    </tbody>
                                </table>
                            </div>
                            <div class="paging_space">
                                <PagingComponent />
                            </div>
                        </div>
                    </section>
                </article>
            </div>

            <PopMagicOrgan open={organMagicPop} close={closeOrganMagic} />
            <PopOrganEnroll open={organEnrollPop} close={closeOrganEnroll} />
            <PopDocument open={docuPop} close={closeDocument} />
            <PopOrganDetail open={organDetailPop} close={closeDetail} />
            <PopOrganRepair open={organRepairPop} close={closeReapair} />
        </div>
    );
}

export default SettOrgan;
