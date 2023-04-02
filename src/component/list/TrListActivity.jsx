import React, { Fragment } from 'react';
import SelectComponent from '../common/SelectComponent';


const TrListActivity = ({ operation, comb, organ, facility, fuel, unit, total01, total02, jan01, jan02, feb01, feb02, mar01, mar02, apr01, apr02,
    may01, may02, jun01, jun02, jul01, jul02, aug01, aug02, sep01, sep02, oct01, oct02, nov01, nov02, dec01, dec02 }) => {

    return (
        <Fragment>
            <tr>
                <td>
                    <p className='td_txt'>{operation}</p>
                </td>
                <td>
                    <p className='td_txt'>{comb}</p>
                </td>
                <td className='td_organ'>
                    <p className='td_txt'>{organ}</p>
                </td>
                <td className='tal td_facility'>
                    <p className='td_txt'>{facility}</p>
                    <p className='td_txt'>{fuel}</p>
                </td>
                <td>
                    <SelectComponent className={'selector unit_selt'}>
                        <option value="">Nm3</option>
                        <option value="">TJ</option>
                    </SelectComponent>
                    <p className='td_txt'>{unit}</p>
                </td>
                <td className='tar'>
                    <div className='td_total sum'>
                        <p className='td_txt'>{total01}</p>
                        <p className='td_txt'>{total02}</p>
                    </div>
                </td>
                <td className='tar'>
                    <div className='td_total'>
                        <p className='td_txt'>{jan01}</p>
                        <p className='td_txt'>{jan02}</p>
                    </div>
                </td>
                <td className='tar'>
                    <div className='td_total'>
                        <p className='td_txt'>{feb01}</p>
                        <p className='td_txt'>{feb02}</p>
                    </div>
                </td>
                <td className='tar'>
                    <div className='td_total'>
                        <p className='td_txt'>{mar01}</p>
                        <p className='td_txt'>{mar02}</p>
                    </div>
                </td>
                <td className='tar'>
                    <div className='td_total'>
                        <p className='td_txt'>{apr01}</p>
                        <p className='td_txt'>{apr02}</p>
                    </div>
                </td>
                <td className='tar'>
                    <div className='td_total'>
                        <p className='td_txt'>{may01}</p>
                        <p className='td_txt'>{may02}</p>
                    </div>
                </td>
                <td className='tar'>
                    <div className='td_total'>
                        <p className='td_txt'>{jun01}</p>
                        <p className='td_txt'>{jun02}</p>
                    </div>
                </td>

                <td className='tar'>
                    <div className='td_total'>
                        <p className='td_txt'>{jul01}</p>
                        <p className='td_txt'>{jul02}</p>
                    </div>
                </td>
                <td className='tar'>
                    <div className='td_total'>
                        <p className='td_txt'>{aug01}</p>
                        <p className='td_txt'>{aug02}</p>
                    </div>
                </td>
                <td className='tar'>
                    <div className='td_total'>
                        <p className='td_txt'>{sep01}</p>
                        <p className='td_txt'>{sep02}</p>
                    </div>
                </td>
                <td className='tar'>
                    <div className='td_total'>
                        <p className='td_txt'>{oct01}</p>
                        <p className='td_txt'>{oct02}</p>
                    </div>
                </td>
                <td className='tar'>
                    <div className='td_total'>
                        <p className='td_txt'>{nov01}</p>
                        <p className='td_txt'>{nov02}</p>
                    </div>
                </td>
                <td className='tar'>
                    <div className='td_total'>
                        <p className='td_txt'>{dec01}</p>
                        <p className='td_txt'>{dec02}</p>
                    </div>
                </td>
            </tr>
        </Fragment>
    );
};

export default TrListActivity;
