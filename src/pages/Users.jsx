import React, { Component } from 'react';
import { useState } from 'react';
import Header from '../component/layout/Header';
import Aside from '../component/layout/Aside';
import ButtonComponent from '../component/common/ButtonComponent';
import PagingComponent from '../component/common/PagingComponent';
import ThUsers from '../component/list/ThUsers';
import TrUsers from '../component/list/TrUsers';
import PopManagerEnroll from '../component/popup/PopManagerEnroll';


const Discharge = () => {

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

            <div className="contents_inner">
                <article className="inner_top">
                    <div className="dflx_jbet">
                        <div className="inner_title">
                            <h1 className="h1_b24">담당자 관리</h1>
                            <p className="explain">회사 조직별 온실가스 배출 관리 담당자 생성/관리</p>
                        </div>
                        <div className='inner_btzone'>
                            <ButtonComponent onClick={openManager} type={'button'} className={'btn_default enroll'} txt={'담당자 등록'} />
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
                                <caption className="caption_title">담당자 목록</caption>

                                <table className="netz_table manager_table">
                                    <ThUsers />
                                    <tbody>
                                        <TrUsers
                                            use_className={'users_state manager'}
                                            manager={"주관리자"}
                                            userName={"스티브잡스"}
                                            dept={"시설관리팀"}
                                            space={'전체'}
                                            id={'appleceo'}
                                            phone={"02-1234-5678 (001)"}
                                            email={"steve@networks.com"}
                                            regidate={"2023.03.01"}
                                            use={'사용'}
                                            repair={'수정'}
                                            repiarUser={''}
                                        />
                                        <TrUsers
                                            userName={"이도"}
                                            dept={"경영지원팀"}
                                            space={'본관, 생산1동, 생산2동, 생산3동'}
                                            id={'seoul201'}
                                            phone={"02-1234-5678 (002)"}
                                            email={"steve@networks.com"}
                                            regidate={"2023.03.01"}
                                            use={'사용'}
                                            repair={'수정'}
                                            repiarUser={''}
                                        />
                                        <TrUsers
                                            userName={"정약용"}
                                            dept={"경영지원팀"}
                                            space={'저장1동, 저장2동, 차량'}
                                            id={'seoul201'}
                                            phone={"02-1234-5678 (002)"}
                                            email={"steve@networks.com"}
                                            regidate={"2023.03.01"}
                                            use={'사용'}
                                            repair={'수정'}
                                            repiarUser
                                        />
                                        <TrUsers
                                            userName={"김철수"}
                                            dept={"경영지원팀"}
                                            space={'본관, 생산동, 저장동, 차량'}
                                            id={'seoul201'}
                                            phone={"02-1234-5678 (002)"}
                                            email={"steve@networks.com"}
                                            regidate={"2023.03.01"}
                                            use={'사용'}
                                            repair={'수정'}
                                            repiarUser
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

            <PopManagerEnroll open={managerPop} close={closeManager} />
        </div>
    );
}

export default Discharge;
