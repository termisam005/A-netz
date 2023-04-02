import React, { Component } from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Header from '../component/layout/Header';
import AsideTest from '../component/layout/AsideTest';
import ButtonComponent from '../component/common/ButtonComponent';
import SearchComponent from '../component/common/SearchComponent';
import PagingComponent from '../component/common/PagingComponent';
import ThDischarge from '../component/list/ThDischarge';
import TrDischarge from '../component/list/TrDischarge';
import PopEvidence from '../component/popup/PopEvidence';
import PopEnrollment from '../component/popup/PopEnrollment';


const MenuTest = () => {

    const navigator = useNavigate();

    const [evidPop, setEvidPop] = useState(false);
    const openEvid = () => {
        setEvidPop(true);
    }
    const closeEvid = () => {
        setEvidPop(false);
    }

    const [enrollPop, setEnrollPOp] = useState(false);
    const openEnroll = () => {
        setEnrollPOp(true);
    }
    const closeEnroll = () => {
        setEnrollPOp(false);
    }

    //aside toggle 이벤트
    const [toggleState, setToggleState] = useState(false);
    const toggleArrow = () => {
        setToggleState(!toggleState);
    }
    

    return (
        <div className={toggleState? 'Dash_body respon' : 'Dash_body'}>
            <Header />
            <AsideTest asideClass={toggleState? 'aside respon' : 'aside'} 
                arrowClass={toggleState? 'aside_arrow on' : 'aside_arrow'} onClick={toggleArrow}
                menuHomeClass={'menu_line'} tltHome={'홈'}
                menuDashClass={'menu_line'} tltDash={'대시보드'}
                menuUserClass={'menu_line'} tltUser={'이용자관리'}
                menuPrdClass={'menu_line'} tltPrd={'생산품관리'}
                menuDiscClass={'menu_line on'} tltDisc={'조직/배출시설 관리'}
                menuOrganClass={'menu_line'} tltOrgan={'조직도'}
                menuDataClass={'menu_line'} tltData={'배출원 활동자료'}
                menuAnalyClass={'menu_line'} tltAnaly={'분석'}>
            </AsideTest> 
            
            <div className='contents_inner'>

                <article className='inner_top'>
                    <div className='dflx_jbet'>
                        <div className='inner_title'>
                            <h1 className='h1_b24'>조직/배출시설 관리</h1>
                            <p className='explain'>
                                기업 내 어느 조직까지 온실가스 산정 범위에 포함시킬 것인지 규정하는 단계입니다.
                            </p>
                        </div>
                        <div className='inner_btzone'>
                            <ButtonComponent type={'button'} className={'btn_default bldark enroll'} onClick={openEvid} txt={'증빙문서 등록'} />
                            <ButtonComponent type={'button'} className={'btn_default enroll'} onClick={openEnroll} txt={'등록'} />
                        </div>
                    </div>
                </article>

                <article className='contents_body'>

                    <section className='conts_top'>
                        <div className='cotop_left'>
                            <div className='tabt_line'>
                                <ButtonComponent type={'button'} className={'btn_tab on'} onClick={''} txt={'전체'} />
                                <ButtonComponent type={'button'} className={'btn_tab'} onClick={''} txt={'사용'} />
                                <ButtonComponent type={'button'} className={'btn_tab'} onClick={''} txt={'미사용'} />
                            </div>
                        </div>
                        <div className='cotop_right'>
                            <SearchComponent className="wrput put_srch" placeholder="Search" btn_tlt="검색"  />
                        </div>
                    </section>

                    <section className='contents'>
                        <div className='conts_body'>
                            <div className='table_cont scroll'>
                                <caption className='caption_title'>
                                    조직/운영경계목록
                                </caption>
                                <table className='netz_table'>
                                    <ThDischarge />
                                    <tbody>
                                        <TrDischarge type={'건물'} locate={'서울공장'} organ={'본관'} form={'회사'} setting={'운영통제'} share={''} 
                                            oper_className={'td_txt scp2'} operation={'Scope2'} comb={'고정'} facility={'난방보일러'} fuel={'도시가스(LNG)'}
                                            code={'OTG-BD000001'} manager={'홍길동'} rank={'부장'} regidate={'2022.10.01'} fixdate={'2022.10.01'} 
                                            use_className={'td_txt'} status={'주관리자'} />
                                        <TrDischarge type={'건물'} locate={'서울공장'} organ={'생산동'} form={'회사'} setting={'운영통제'} share={'100'}
                                            oper_className={'td_txt scp2'} operation={'Scope2'} comb={'전력'} facility={'난방보일러'} fuel={'외부전기'}
                                            code={'OTG-BD000001'} manager={'봉준호'} rank={'과장'} regidate={'2022.10.01'} fixdate={'2022.10.01'}
                                            use_className={'td_txt use'} status={'사용'}  />
                                        <TrDischarge type={'건물'} locate={'서울공장'} organ={'기숙사'} form={'회사'} setting={'운영통제'} share={'100'}
                                            oper_className={'td_txt scp2'} operation={'Scope2'} comb={'전력'} facility={'난방보일러'} fuel={'도시가스(LNG)'}
                                            code={'OTG-BD000001'} manager={'봉준호'} rank={'과장'} regidate={'2022.10.01'} fixdate={'2022.10.01'}
                                            use_className={'td_txt un_use'} status={'미사용'} />
                                        <TrDischarge type={'건물'} locate={'서울공장'} organ={'저장동'} form={'회사'} setting={'운영통제'} share={''}
                                            oper_className={'td_txt scp1'} operation={'Scope1'} comb={'고정'} facility={'냉장시설'} fuel={'외부전기'}
                                            code={'OTG-BD000001'} manager={'봉준호'} rank={'과장'} regidate={'2022.10.01'} fixdate={'2022.10.01'}
                                            use_className={'td_txt use'} status={'사용'} />
                                        <TrDischarge type={'건물'} locate={'서울공장'} organ={'식당'} form={'회사'} setting={'운영통제'} share={''}
                                            oper_className={'td_txt scp1'} operation={'Scope1'} comb={'고정'} facility={'조리시설'} fuel={'외부스팀'}
                                            code={'OTG-BD000001'} manager={'봉준호'} rank={'과장'} regidate={'2022.10.01'} fixdate={'2022.10.01'}
                                            use_className={'td_txt use'} status={'사용'} />
                                        <TrDischarge type={'건물'} locate={'서울공장'} organ={'승용차'} form={'회사'} setting={'운영통제'} share={''}
                                            oper_className={'td_txt scp1'} operation={'Scope1'} comb={'고정'} facility={'영업용승용차'} fuel={'휘발유'}
                                            code={'OTG-BD000001'} manager={'봉준호'} rank={'과장'} regidate={'2022.10.01'} fixdate={'2022.10.01'}
                                            use_className={'td_txt use'} status={'사용'} />
                                        <TrDischarge type={'건물'} locate={'서울공장'} organ={'승용차'} form={'회사'} setting={'운영통제'} share={''}
                                            oper_className={'td_txt scp1'} operation={'Scope1'} comb={'고정'} facility={'영업용승용차'} fuel={'휘발유'}
                                            code={'OTG-BD000001'} manager={'봉준호'} rank={'과장'} regidate={'2022.10.01'} fixdate={'2022.10.01'}
                                            use_className={'td_txt use'} status={'사용'} />
                                        <TrDischarge type={'건물'} locate={'서울공장'} organ={'승용차'} form={'회사'} setting={'운영통제'} share={''}
                                            oper_className={'td_txt scp1'} operation={'Scope1'} comb={'고정'} facility={'영업용승용차'} fuel={'휘발유'}
                                            code={'OTG-BD000001'} manager={'봉준호'} rank={'과장'} regidate={'2022.10.01'} fixdate={'2022.10.01'}
                                            use_className={'td_txt use'} status={'사용'} />
                                        <TrDischarge type={'건물'} locate={'서울공장'} organ={'승용차'} form={'회사'} setting={'운영통제'} share={''}
                                            oper_className={'td_txt scp1'} operation={'Scope1'} comb={'고정'} facility={'영업용승용차'} fuel={'휘발유'}
                                            code={'OTG-BD000001'} manager={'봉준호'} rank={'과장'} regidate={'2022.10.01'} fixdate={'2022.10.01'}
                                            use_className={'td_txt use'} status={'사용'} />
                                        <TrDischarge type={'건물'} locate={'서울공장'} organ={'승용차'} form={'회사'} setting={'운영통제'} share={''}
                                            oper_className={'td_txt scp1'} operation={'Scope1'} comb={'고정'} facility={'영업용승용차'} fuel={'휘발유'}
                                            code={'OTG-BD000001'} manager={'봉준호'} rank={'과장'} regidate={'2022.10.01'} fixdate={'2022.10.01'}
                                            use_className={'td_txt use'} status={'사용'} />
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

            <PopEvidence open={evidPop} close={closeEvid} />
            <PopEnrollment open={enrollPop} close={closeEnroll} />
        </div>
    );
}

export default MenuTest;
