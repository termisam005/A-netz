import React, { Component } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonComponent from '../common/ButtonComponent';
import RatioChart5pop from '../chart/RatioChart5pop';


const PopScope2 = ({ open, close }) => {

    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>

            <div className={"pop_body pop_large_new"}>
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">Scope2. 배출시설 현황</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_contain magic'> 
                        <RatioChart5pop />
                    </section>
                </div>
                <div className="popn_bottom">
                    <ButtonComponent onClick={close} className="btn_default" txt={'닫기'} />
                </div>
            </div>

        </div>
    )
}

export default PopScope2;

