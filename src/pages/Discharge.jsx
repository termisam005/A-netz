import React, { Component } from 'react';
import { useState } from 'react';
import Header from '../component/layout/Header';
import Aside from '../component/layout/Aside';
import ButtonComponent from '../component/common/ButtonComponent';
import PagingComponent from '../component/common/PagingComponent';
import ThDischarge from '../component/list/ThDischarge';
import TrDischarge from '../component/list/TrDischarge';
import SelectComponent from '../component/common/SelectComponent';
import PopDischarge from '../component/popup/PopDischarge';
import PopDiscRepair from '../component/popup/PopDiscRepair';
import PopMagicDisc from '../component/popup/PopMagicDisc';


const Discharge = () => {

    //등록마법사
    const [discMagicPop, setDiscMagic] = useState(false);
    const openDiscMagic = () => {
        setDiscMagic(true);
    }
    const closeDiscMagic = () => {
        setDiscMagic(false);
    }

    //등록
    const [dischargePop, setDischargePop] = useState(false);
    const openDischargePop = () => {
        setDischargePop(true);
    }
    const closeDischargePop = () => {
        setDischargePop(false);
    }

    //수정
    const [repairPop, setRepairPop] = useState(false);
    const openRepairPop = () => {
        setRepairPop(true);
    }
    const closeRepairPop = () => {
        setRepairPop(false);
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

            <div className='contents_inner'>

                <article className='inner_top'>
                    <div className='dflx_jbet'>
                        <div className='inner_title'>
                            <h1 className='h1_b24'>배출시설 관리</h1>
                            <p className='explain'>
                                기업의 온실가스 배출 시설을 등록 관리하는 페이지입니다.
                            </p>
                        </div>
                        <div className='inner_btzone'>
                            <ButtonComponent type={'button'} className={'btn_default enroll bldark'} txt={'등록마법사'} onClick={openDiscMagic} />
                            <ButtonComponent type={'button'} className={'btn_default enroll'} txt={'등록'} onClick={openDischargePop} />
                        </div>
                    </div>
                </article>

                <article className='contents_body'>

                    <section className='conts_top'>
                        <div className='cotop_left dflx_ac'>
                            <SelectComponent className={'selector m-r-16'}>
                                <option value="">전체</option>
                                <option value="">본사</option>
                                <option value="" selected>서울1공장</option>
                                <option value="">서울2공장</option>
                                <option value="">샌프란시스코 제2공장</option>
                            </SelectComponent>
                            <span className='spipe28 m-r-16'></span>
                            <div className='tabt_line'>
                                <ButtonComponent type={'button'} className={'btn_tab on'} onClick={''} txt={'전체'} />
                                <ButtonComponent type={'button'} className={'btn_tab'} onClick={''} txt={'사용'} />
                                <ButtonComponent type={'button'} className={'btn_tab'} onClick={''} txt={'미사용'} />
                            </div>
                        </div>
                        <div className='cotop_right'>
                            {/* <SearchComponent zoneClass="put_zone w260" className="wrput put_srch" placeholder="Search" btn_tlt="검색"  /> */}
                        </div>
                    </section>

                    <section className='contents'>
                        <div className='conts_body'>
                            <div className='table_cont scroll'>
                                <caption className='caption_title'>
                                    조직 목록
                                </caption>
                                <table className='netz_table'>
                                    <ThDischarge />
                                    <tbody>
                                        <TrDischarge locate={'서울제1공장'} type={'건물'} organ={'본관'} setting={'지분통제'} share={'100%'} 
                                            oper_className={'td_txt'} operation={'Scope1'} comb={'고정연소원'} facility={'난방보일러001'} fuel={'도시가스(LNG)'}
                                            code={'A001-001'} manager={'홍길동'} rank={'부장'} regidate={'2022.10.01'} fixdate={'2022.10.01'} 
                                            use_className={'td_txt'} status={'사용'} repairBtnClass={'btn_default little wht'} repair={'수정'} repairDisc={openRepairPop} />
                                        <TrDischarge locate={'서울제1공장'} type={'건물'} organ={'본관'} setting={'지분통제'} share={'100%'} 
                                            oper_className={'td_txt'} operation={'Scope1'} comb={'고정연소원'} facility={'난방보일러001'} fuel={'도시가스(LNG)'}
                                            code={'A001-001'} manager={'홍길동'} rank={'부장'} regidate={'2022.10.01'} fixdate={'2022.10.01'} 
                                            use_className={'td_txt'} status={'사용'} repairBtnClass={'btn_default little wht'} repair={'수정'} repairDisc={openRepairPop} />
                                        <TrDischarge locate={'서울제1공장'} type={'건물'} organ={'본관'} setting={'지분통제'} share={'100%'} 
                                            oper_className={'td_txt'} operation={'Scope1'} comb={'고정연소원'} facility={'난방보일러001'} fuel={'도시가스(LNG)'}
                                            code={'A001-001'} manager={'홍길동'} rank={'부장'} regidate={'2022.10.01'} fixdate={'2022.10.01'} 
                                            use_className={'td_txt'} status={'사용'} repairBtnClass={'btn_default little wht'} repair={'수정'} repairDisc={openRepairPop} />
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

            <PopMagicDisc open={discMagicPop} close={closeDiscMagic} />
            <PopDischarge open={dischargePop} close={closeDischargePop} />
            <PopDiscRepair open={repairPop} close={closeRepairPop} />
        </div>
    );
}

export default Discharge;
