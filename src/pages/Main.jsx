import React, { Component } from 'react';
import $ from "jquery";
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import MainHeader from '../component/layout/MainHeader';
import Footer from '../component/layout/Footer';
import ImgComponent from '../component/common/ImgComponent';
import ButtonComponent from '../component/common/ButtonComponent';
import FadeComponent from '../component/common/FadeComponent';


const Main = () => {

    const navigator = useNavigate();

    useEffect(()=>{

        // document.querySelector('.go_ready').addEventListener('click', e=>{
        //     document.querySelector('.main_art02').scrollIntoView({behavior:'smooth'});
        // });
        
        window.addEventListener("scroll", e => {
            if ($(".header").offset().top > 920){
                $(".header").addClass("white");
                $('.circle_arrow').addClass('on');
            } else {
                $(".header").removeClass("white");
                $('.circle_arrow').removeClass('on');
            }
        });

    });

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    //FadeIn 이벤트    
    const { ref: firstArticleRef, inView: isFirstView } = useInView({
        threshold: 0.1,
    });
    const { ref: secondArticleRef, inView: isSecondView } = useInView({
        threshold: 0.1,
    });
    const { ref: thirdArticleRef, inView: isThirdView } = useInView({
        threshold: 0.1,
    });


    return (
        <div className="Main_body">

            <MainHeader header_class={'header'} />

            <article className='main_art01' style={{ backgroundImage: 'url("/images/main_banner1.jpg")' }}>
                <div className='main_wrap'>
                    <section className='main_center01'>
                        <div className='mtitle_wrap'>
                            <dl className='mtitle_dl'>
                                <dt>
                                    중소&중견기업을 위한 <br/>탄소배출량 측정 및 공시 플랫폼
                                </dt>
                                <dd>
                                    <p className='mtitle_exp'>
                                        중소기업과 중견기업을 위한 탄소배출량 측정 및 공시 SaaS 서비스
                                    </p>
                                    <ButtonComponent className={'btn_default med'} txt={'시작하기'} onClick={() => navigator('/Dashboard1')} />
                                </dd>
                            </dl>
                        </div>
                    </section>
                    <p class="go_ready">
                        <span>Scroll Down</span>
                        <ImgComponent src={'ani_arrow.gif'} />
                    </p>
                </div>
            </article>
            <article className='main_art02' ref={firstArticleRef}>
                <div className='main_wrap'>
                    <section className='main_center02'>
                        <div className='mtitle_wrap between'>
                            <FadeComponent isStart={isFirstView} direction={'bottom'} duration={1.3}>
                                <dl className={'msent_dl'}>
                                    <dt>
                                        기업의 탄소배출 현황과 미래의 감소 목표를 <br />
                                        한눈에 보여주는 직관적인 화면
                                    </dt>
                                    <dd>
                                        NetZ는 우리기업의 탄소배출 현황을 기록하고 인증/관리할 수 있습니다. <br />
                                        차트로 구현되는 배출기록은 조직과 시설 별 현황을 사용자에게 한눈에 보여주며, <br />
                                        궁극적으로 기업이 달성해야 할 감축목표를 단계적으로 제시합니다.
                                    </dd>
                                </dl>
                            </FadeComponent>
                            <FadeComponent isStart={isFirstView} direction={'right'} duration={1.3} className={'ani_img_right'}>
                                <ImgComponent src={'main_img01.png'} />
                            </FadeComponent>
                        </div>
                    </section>
                </div>
            </article>
            <article className='main_art03' ref={secondArticleRef}>
                <div className='main_wrap'>
                    <section className='main_center02'>
                        <div className='mtitle_wrap between'>
                            <FadeComponent isStart={isSecondView} direction={'left'} duration={1.3} className="ani_img_left">
                                <ImgComponent src={'main_img02.png'} />
                            </FadeComponent>
                            <FadeComponent isStart={isSecondView} direction={'bottom'} duration={1.3}>
                                <dl className="msent_dl">
                                    <dt>NetZ 마법사로 쉽게 구축하는 온실가스 인벤토리</dt>
                                    <dd>
                                        탄소배출관리에서 가장 어렵고 까다로운 인벤토리 구축! <br />
                                        ‘시스템 경계, 조직경계, 운영경계’와 같은 용어들이 아무리 생소하고 어려워도 <br />
                                        NetZ 마법사를 이용하면 누구나 쉽게 우리 기업의 온실가스 인벤토리를 구축할 수 <br />
                                        있습니다. <br />
                                        인벤토리가 구축된 후에는 하나의 화면에서 시스템을 확인하고 변경사항을 바로 추<br />
                                        가하거나 수정할 수 있습니다.
                                    </dd>
                                </dl>
                            </FadeComponent>
                        </div>
                    </section>
                </div>
            </article>
            <article className='main_art04' ref={thirdArticleRef}>
                <div className='main_wrap'>
                    <section className='main_center02'>
                        <div className='mtitle_wrap between'>
                            <FadeComponent isStart={isThirdView} direction={'bottom'} duration={1.3}>
                                <dl className="msent_dl">
                                    <dt>
                                        무엇을 입력해야 할지 막막한 순간에 <br />꼭 나타나 도움을 주는 사이드 패널
                                    </dt>
                                    <dd>
                                        새로운 조직을 추가하거나 자산의 변경이 생겼을 때, 혹은 관리자가 변경되어 탄소
                                        <br />
                                        배출데이터를 갑자기 관리해야 할 때, 무엇을 어떻게 입력해야 할지 도움이 필요하다
                                        <br />면 NetZ 헬프 버튼을 눌러보세요. <br />
                                        사이드 패널에서 상세한 설명과 도움을 받을 수 있습니다.
                                    </dd>
                                </dl>
                            </FadeComponent>
                            <FadeComponent isStart={isThirdView} direction={'right'} duration={1.3} className="ani_img_right">
                                <ImgComponent src={'main_img03.png'} />
                            </FadeComponent>
                        </div>
                    </section>
                </div>
            </article>
            <Footer />

            <div className='circle_arrow' onClick={goTop}>
                <ImgComponent src={'arrow_top_wh.png'} />
            </div>

        </div>
    );
}

export default Main;
