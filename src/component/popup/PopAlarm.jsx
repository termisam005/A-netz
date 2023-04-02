import React, { Component } from 'react';
import ButtonComponent from '../common/ButtonComponent';


const PopAlarm = ({open, close}) => {

    return (
        <div className={open ? 'modal trans open' : 'modal trans'}>
            <div onClick={close} className='modal_bg'></div>

            <div className="member_popup_box">

                <div className="pop_body">
                    <section className="alarm_top">
                        <h2 className='h2_b20'>알림</h2>
                        <ButtonComponent onClick={close} className={'btn_default sm wht'} txt={'모두확인'} />
                    </section>
                    <section className='alarm_body'>
                        <div className='alarm_cont'>
                            <dl className='point_dl'>
                                <dt>
                                    <span className='point on'></span>
                                </dt>
                                <dd>
                                    <p className='p_r14'>
                                        이용자 신청이 반려되었습니다.
                                    </p>
                                </dd>
                            </dl>
                            <article className='alarm_inner'>
                                <div className="alarm_detail">
                                    <h4 className='h4_m14'>반려사유 :</h4>
                                    <p className="p_r14 op06">
                                        승인에 필요한 정보가 부족합니다.
                                    </p>
                                    <div>
                                        <ul className="pop_record">
                                            <li>- 재직증명서 누락</li>
                                            <li>- 연락처 불일치</li>
                                        </ul>
                                    </div>
                                </div>
                                <span className='timer'>
                                    <span className='time'>4</span>
                                    <span>시간 전</span>
                                </span>
                            </article>
                        </div>
                        <div className='alarm_cont grey'>
                            <dl className='point_dl'>
                                <dt>
                                    <span className='point on'></span>
                                </dt>
                                <dd>
                                    <p className='p_r14'>
                                        이용자 신청이 완료되었습니다.
                                    </p>
                                </dd>
                            </dl>
                            <article className='alarm_inner'>
                                <span className='timer'>
                                    <span className='time'>4</span>
                                    <span>시간 전</span>
                                </span>
                            </article>
                        </div>
                        <div className='alarm_cont'>
                            <dl className='point_dl'>
                                <dt>
                                    <span className='point'></span>
                                </dt>
                                <dd>
                                    <p className='p_r14'>
                                        공지사항이 등록되었습니다.
                                    </p>
                                </dd>
                            </dl>
                            <article className='alarm_inner'>
                                <span className='timer'>
                                    <span className='time'>6</span>
                                    <span>시간 전</span>
                                </span>
                            </article>
                        </div>
                    </section>
                </div>

            </div>

        </div>
    )
}

export default PopAlarm;

