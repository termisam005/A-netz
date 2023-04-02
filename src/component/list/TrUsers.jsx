import React, { Fragment } from 'react';
import ButtonComponent from '../common/ButtonComponent';


const TrDischarge = ({ use_className, manager, userName, dept, space, id, phone, email, regidate, use, repair, repiarUser }) => {

    return (
        <Fragment>
            <tr>
                <td>
                    <p className={use_className}>{manager}</p>
                </td>
                <td>
                    <p className='td_name'>{userName}</p>
                </td> 
                <td>
                    <p className='td_txt'>{dept}</p>
                </td>
                <td>
                    <p className='td_space'>{space}</p>
                </td>
                <td>
                    <p className='td_txt'>{id}</p>
                </td>

                <td>
                    <p className='td_txt tell'>{phone}</p>
                </td>

                <td>
                    <p className='td_txt'>{email}</p>
                </td>
                <td>
                    <div className='td_date'>
                        <p className='date_txt'>{regidate}</p>
                    </div>
                </td>
                <td>
                    <p className='td_txt use_txt'>{use}</p>
                </td>
                <td>
                    <ButtonComponent className={'btn_default little wht'} txt={repair} onClick={repiarUser} />
                </td>
            </tr>
        </Fragment>
    );
};

export default TrDischarge;
