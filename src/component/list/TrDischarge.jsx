import React, { Fragment } from 'react';
import ButtonComponent from '../common/ButtonComponent';


const TrDischarge = ({ type, locate, organ, setting, share, oper_className, operation, comb, facility, 
    fuel, code, manager, rank, regidate, fixdate, status, use_className, repairBtnClass, repair, repairDisc }) => {

    return (
        <Fragment>
            <tr>
                <td>
                    <p className='td_txt'>{locate}</p>
                </td>
                <td>
                    <p className='td_txt'>{type}</p>
                </td>
                <td>
                    <p className='td_txt'>{organ}</p>
                </td>
                <td>
                    <p className='td_txt'>{setting}</p>
                </td>
                <td>
                    <p className='td_txt'>{share}</p>
                </td>
                <td>
                    <p className={oper_className}>{operation}</p>
                </td>
                <td>
                    <p className='td_txt'>{comb}</p>
                </td>
                <td>
                    <p className='td_txt'>{facility}</p>
                </td>
                <td>
                    <p className='td_txt'>{fuel}</p>
                </td>
                <td>
                    <p className='td_txt'>{code}</p>
                </td>
                <td>
                    <p className='td_txt'>{manager}</p>
                </td>
                <td>
                    <p className='td_txt'>{rank}</p>
                </td>
                <td>
                    <div className='td_date'>
                        <p className='date_txt'>{regidate}</p>
                        <p className='date_txt'>{fixdate}</p>
                    </div>
                </td>
                <td>
                    <p className={use_className}>{status}</p>
                </td>
                <td>
                    <ButtonComponent className={repairBtnClass} txt={repair} onClick={repairDisc} />
                </td>
            </tr>
        </Fragment>
    );
};

export default TrDischarge;
