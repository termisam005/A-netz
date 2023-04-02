import React, { Component } from 'react';
import ImgComponent from '../common/ImgComponent';
import MenuHome from '../menu/MenuHome';
import MenuDash from '../menu/MenuDash';
import MenuUser from '../menu/MenuUser';
import MenuPrd from '../menu/MenuPrd';
import MenuDisc from '../menu/MenuDisc';
import MenuOrgan from '../menu/MenuOrgan';
import MenuData from '../menu/MenuData';
import MenuAnaly from '../menu/MenuAnaly';
import MenuComponent from '../common/MenuComponent';


const AsideTest = (props) => {

    return (
        <aside className={props.asideClass}>
            <div className='aside_wrap'>
                <div className={props.arrowClass} onClick={props.onClick}>
                    <p className='arrow_in'>
                        <ImgComponent src={'arr_left.svg'} className='arr_icon' />
                        <ImgComponent src={'arr_right.svg'} className='arr_icon_on' />
                    </p>
                </div>
                <nav className='aside_nav'>
                    <ul>
                        <MenuComponent title={'홈'} path={'/main'}>
                            <ImgComponent src={'icon_home.svg'} className='mn_icon' />
                            <ImgComponent src={'icon_home_on.svg'} className='mn_icon_on' />
                        </MenuComponent>
                        <MenuComponent title={'대시보드'} path={'/Dashboard'}>
                            <ImgComponent src={'icon_dash.svg'} className='mn_icon' />
                            <ImgComponent src={'icon_dash_on.svg'} className='mn_icon_on' />
                        </MenuComponent>
                        <MenuComponent title={'조직설정'} path={'/SettOrgan'}>
                            <ImgComponent src={'icon_organ.svg'} className="mn_icon" />
                            <ImgComponent src={'icon_organ_on.svg'} className="mn_icon_on" />
                        </MenuComponent>
                        <MenuComponent title={'담당자관리'} path={'/Users'}>
                            <ImgComponent src={'icon_user.svg'} className="mn_icon" />
                            <ImgComponent src={'icon_user_on.svg'} className="mn_icon_on" />
                        </MenuComponent>
                        <MenuComponent title={'배출시설 관리'} path={'/Discharge'}>
                            <ImgComponent src={'icon_discharge.svg'} className='mn_icon' />
                            <ImgComponent src={'icon_discharge_on.svg'} className='mn_icon_on' />
                        </MenuComponent>
                        <MenuComponent title={'배출원 활동자료 입력'} path={'/DataActivity'}>
                            <ImgComponent src={'icon_data_put.svg'} className='mn_icon' />
                            <ImgComponent src={'icon_data_put_on.svg'} className='mn_icon_on' />
                        </MenuComponent>
                        <MenuComponent title={'분석'} path={'/Analysis'}>
                            <ImgComponent src={'icon_analy1.svg'} className='mn_icon' />
                            <ImgComponent src={'icon_analy1_on.svg'} className='mn_icon_on' />
                        </MenuComponent>
                        <MenuComponent title={'배출원 활동자료 조회'} path={'/ViewDataActivity'}>
                            <ImgComponent src={'icon_data.svg'} className='mn_icon' />
                            <ImgComponent src={'icon_data_on.svg'} className='mn_icon_on' />
                        </MenuComponent>
                        <MenuComponent title={'감축목표 설정'} path={'/ReduceTarget'}>
                            <ImgComponent src={'icon_target.svg'} className='mn_icon' />
                            <ImgComponent src={'icon_target_on.svg'} className='mn_icon_on' />
                        </MenuComponent>
                    </ul>
                </nav> 
            </div>
        </aside>
    );
}

export default AsideTest;
