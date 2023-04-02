import React, { Component } from 'react';
import ImgComponent from '../common/ImgComponent';


const Footer = () => {

    return (
        <footer>
            <section className='footer_in'>
                <div className='footer_left'>
                    <h1>
                        <ImgComponent src={'logo_hooxi.png'} />
                    </h1>
                    <p className='copy op06'>ⓒ 2021 Hooxi partners</p>
                </div>
                <div className='footer_right'>
                    <div className='copy_right'>
                        <p className='op06'>Tel. 02-2682-3662 | daniel@hooxipartners.com</p>
                        <p className='op06'>(07325) 서울특별시 영등포구 의사당대로 83 (여의도동, 오투타워) 6층 ㅣ 사업자등록번호 529-81-02298</p>
                        <p className='op06'>Copyright ⓒ 2021 by Hooxi partners. Corp. All Rights Reserved.</p>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
