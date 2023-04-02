import React from 'react';

const SelectMiniComponent = (props) => {

    return (
        <select className={props.className} style={{ backgroundImage: 'url("/images/selt_down20.svg")' }}>
            {props.children}
        </select>
    );
};

export default SelectMiniComponent;
