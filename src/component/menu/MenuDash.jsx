import React from 'react';
import { useNavigate } from 'react-router';
import ImgComponent from '../common/ImgComponent';

const MenuDash = ({ tlt, className }) => {

    const navigator = useNavigate();

    return (
        <li>
            <a onClick={() => navigator('/Dashboard')}>
                <div className={className}>
                    <p className='menu_icon'>
                        <ImgComponent src={'icon_dash.svg'} className='mn_icon' />
                        <ImgComponent src={'icon_dash_on.svg'} className='mn_icon_on' />
                    </p>
                    <span className='menu_tlt'>{tlt}</span>
                </div>
            </a>
        </li>
    );
};

export default MenuDash;
