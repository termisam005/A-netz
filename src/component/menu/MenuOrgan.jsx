import React from 'react';
import { useNavigate } from 'react-router';
import ImgComponent from '../common/ImgComponent';

const MenuOrgan = ({ tlt, className }) => {

    const navigator = useNavigate();

    return (
        <li>
            <a onClick={() => navigator('')}>
                <div className={className}>
                    <p className='menu_icon'>
                        <ImgComponent src={'icon_organ.svg'} className='mn_icon' />
                        <ImgComponent src={'icon_organ_on.svg'} className='mn_icon_on' />
                    </p>
                    <span className='menu_tlt'>{tlt}</span>
                </div>
            </a>
        </li>
    );
};

export default MenuOrgan;
