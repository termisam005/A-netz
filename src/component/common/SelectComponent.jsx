import React from 'react';

const SelectComponent = (props) => {

    return (
        <select className={props.className} disabled={props.disabled} style={{ backgroundImage: 'url("/images/selt_comma.svg")'}}>
            {props.children}
        </select>
    );
};

export default SelectComponent;
