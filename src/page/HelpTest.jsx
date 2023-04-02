import React, { Component } from 'react';
import { useState } from 'react';
import ImgComponent from '../component/common/ImgComponent';
import Header from '../component/layout/Header';
import Aside from '../component/layout/Aside';
import ButtonComponent from '../component/common/ButtonComponent';
import SearchComponent from '../component/common/SearchComponent';
import PagingComponent from '../component/common/PagingComponent';
import CheckboxComponent from '../component/common/CheckboxComponent';
import ThUsers from '../component/list/ThUsers';
import TrUsers from '../component/list/TrUsers';
import PopUsersApproval from '../component/popup/PopUsersApproval';
import HelpFadeComponent from '../component/common/HelpFadeComponent';


const HelpTest = () => {

    const [userApprovalPop, setApprovalPop] = useState(false);
    const openUserApproval = () => {
        setApprovalPop(true);
    }
    const closeUserApproval = () => {
        setApprovalPop(false);
    }

    //Help 이벤트
    const [helpState, setHelpState] = useState(false);
    const openHelp = () => {
        setHelpState(true);
    }
    const closeHelp = () => {
        setHelpState(false);
    }
    

    return (
        <div className='Dash_body'>
            
            <Header headerClass={'header_bg'} />
            <Aside asideClass={'aside'}
                arrowClass={'aside_arrow on'}
                menuHomeClass={'menu_line'} tltHome={'홈'}
                menuDashClass={'menu_line'} tltDash={'대시보드'}
                menuUserClass={'menu_line on'} tltUser={'이용자관리'}
                menuPrdClass={'menu_line'} tltPrd={'생산품관리'}
                menuDiscClass={'menu_line'} tltDisc={'조직/배출시설 관리'}
                menuOrganClass={'menu_line'} tltOrgan={'조직도'}
                menuDataClass={'menu_line'} tltData={'배출원 활동자료'}
                menuAnalyClass={'menu_line'} tltAnaly={'분석'}>
            </Aside>
            
            <div className="help_information_btn">
                <ImgComponent src={"queston_mark_18px.svg"} />
                <ButtonComponent type={"button"} onClick={openHelp} txt={"Help"} />
            </div>

            <div className="contents_inner">
                <article className="inner_top">
                    <div className="dflx_jbet">
                        <div className="inner_title">
                            <h1 className="h1_b24">이용자관리</h1>
                            <p className="explain">회사 조직별로 온실가스 배출 관리를 담당할 이용자를 승인/등록하는 절차입니다.</p>
                        </div>
                    </div>
                </article>

                <article className="contents_body">
                    <section className="conts_top">
                        <div className="cotop_left">
                            <div className="tabt_line">
                                <ButtonComponent type={"button"} className={"btn_tab on"} onClick={""} txt={"전체"} />
                                <ButtonComponent type={"button"} className={"btn_tab"} onClick={""} txt={"승인"} />
                                <ButtonComponent type={"button"} className={"btn_tab"} onClick={""} txt={"반려"} />
                                <ButtonComponent type={"button"} className={"btn_tab"} onClick={""} txt={"대기"} />
                            </div>
                        </div>
                        <div className="cotop_right">
                            <SearchComponent zoneClass={'put_zone w260'} className="wrput put_srch" placeholder="Search" btn_tlt="검색" />
                        </div>
                    </section>

                    <section className="contents">
                        <div className="conts_body">
                            <div className="table_cont scroll">
                                <caption className="caption_title">이용자목록</caption>
                                <table className="netz_table">
                                    <ThUsers />
                                    <tbody>
                                        <TrUsers
                                            customCheck={<CheckboxComponent checkID={"checkbox1"} />}
                                            organ={"서울본사"}
                                            dept={"관리부"}
                                            userName={"봉준호"}
                                            modalName={openUserApproval}
                                            grade={"부장"}
                                            phone={"1234-5678(03)"}
                                            email={"chaeunwoo@gmail.com"}
                                            regidate={"2022.10.01"}
                                            fixdate={"2022.10.01"}
                                            status={"주관리자"}
                                        />
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

            <HelpFadeComponent open={helpState} close={closeHelp} />
            <PopUsersApproval open={userApprovalPop} close={closeUserApproval} />
        </div>
    );
}

export default HelpTest;
