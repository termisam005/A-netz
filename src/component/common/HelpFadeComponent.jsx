import React, { Component } from 'react';
import ImgComponent from './ImgComponent';
import { Fragment } from 'react';


const HelpFadeComponent = ({ open, close }) => {

    return (
        <Fragment>
            <div className={open ? 'modal open' : 'modal'}>
                <div onClick={close} className='modal_bg'></div>
            </div>
            <article className={open? 'right_panel on':'right_panel'}>
                <div className='panel_inner'>
                    <p className='panel_close' onClick={close}>
                        <ImgComponent src={'arr_panel.svg'} />
                    </p>
                    <section className='panel_top'>
                        <h1 className='h1_b24'>온실가스 배출량 산정 등급</h1>
                        <div className='panel_text'>
                            <p>
                                온실가스 배출량을 산정할 때, 업체에서는 온실가스 배출시설에 대한 
                                <strong>산정등급 (Tier 1~4)에 따라 배출량을 계산하거나 측정하는 방법을 적용</strong>할 수 있습니다.
                            </p>
                            <p>
                                산정등듭이 높을수록 온실가스 배출량에 대한 신뢰도와 정확도가 상승하나 접근성이 떨어지기 때문에 주로 
                                <strong>계산에 의한 방법을 사용</strong>합니다.
                            </p>
                        </div>
                    </section>
                    <section className='tier_cont'>
                        <dl className='tier_dl'>
                            <dt>Tier 1</dt>
                            <dd>
                                활동 자료, <strong>IPCC 기본 배출 계수</strong>(기본 산화 계수, 발열량 등 포함)를 활용하는 <strong>기본 방법론</strong>
                            </dd>
                        </dl>
                        <dl className='tier_dl'>
                            <dt>Tier 2</dt>
                            <dd>
                                <strong>국가 고유 배출 계수</strong> 및 발열량 등 일정 부분에 대해 시험·분석을 통해 개발한 매개변수 값을 활용한 배출량 산정 방법론
                            </dd>
                        </dl>
                        <dl className='tier_dl'>
                            <dt>Tier 3</dt>
                            <dd>
                                사업자가 <strong>직접 개발한 계수</strong>를 사용하거나 공급자로부터 제공받은 매개변수 값을 활용하는 배출량 산정 방법론
                            </dd>
                        </dl>
                        <dl className='tier_dl'>
                            <dt>Tier 4</dt>
                            <dd>
                                굴뚝자동측정 기기 등 배출가스 <strong>연속 측정 방법</strong>을 활용한 배출량 산정 방법론
                            </dd>
                        </dl>
                    </section>
                </div>
            </article>
        </Fragment>
    )
}

export default HelpFadeComponent;