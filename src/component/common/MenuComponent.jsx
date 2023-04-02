import React from 'react';
import { useLocation, useNavigate } from 'react-router';


const MenuComponent = ({ children, path, title }) => {

    const navigator = useNavigate();
    const pathname = useLocation().pathname;
    const onClick = () => {
        if (path != null) {
            navigator(path);
        }
    };

    return (
        <li>
            <a onClick={onClick}>
                <div className={(pathname.includes(path) ? 'menu_line on' : 'menu_line')}>
                    <p className='menu_icon'>
                        {children}
                    </p>
                    <span className='menu_tlt'>{title}</span>
                </div>
            </a>
        </li>
    );
};

export default MenuComponent;
