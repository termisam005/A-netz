import React, { Component } from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import PopAlarm from '../popup/PopAlarm';
import PopMemberInformation from '../popup/PopMemberInformation';
import PhotoComponent from '../common/PhotoComponent';


const Header = ({headerClass}) => {

    const navigator = useNavigate();

    //알림 팝업
    const [alarmPop, setAlarmPop] = useState(false);
    const openAlarm = () => {
        setAlarmPop(true);
    }
    const closeAlarm = () => {
        setAlarmPop(false);
    }

    //프로필 팝업
    const [profilePop, setProfilePop] = useState(false);
    const openProfile = () => {
        setProfilePop(true);
    }
    const closeProfile = () => {
        setProfilePop(false);
    }

    return (
        <div className={headerClass}>
            <header>
                <article className="header_in">
                    <section className="header_left">
                        <h1 className='header_logo'>
                            <a onClick={() => navigator('/DashBoard')}>
                                <ImgComponent src={'logo_netz.png'} />
                            </a>
                        </h1>
                        <h2 className='header_title'>탄소배출관리 시스템</h2>
                    </section>
                    <section className="header_right">
                        {/* <div className='alarm_zone' onClick={openAlarm}>
                            <span className='dot red'></span>
                            <p className='bell'>
                                <ImgComponent src={'bell_wh.svg'} />
                            </p>
                        </div> */}
                        <div className='user_zone'>
                            <PhotoComponent className={'user_photo'} circleClass={'circle_photo'} onClick={openProfile}>
                                <ImgComponent src={'photo_img.png'} className={'photo_user'} />
                            </PhotoComponent>
                            <span className='user_txt'>
                                <span className='user_name'>아무개</span>
                                <span className='m-l-4'>이용자님</span>
                            </span>
                        </div>
                    </section>
                </article>
            </header>

            <PopAlarm open={alarmPop} close={closeAlarm} />
            <PopMemberInformation open={profilePop} close={closeProfile} />
        </div>
    );
}

export default Header;
