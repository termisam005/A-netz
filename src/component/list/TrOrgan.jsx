import React, { Fragment } from 'react';
import ButtonComponent from '../common/ButtonComponent';
import BadgeComponent from '../common/BadgeComponent';


const TrOrgan = ({ documentPop, detailPop, repairPop }) => {

    return (
        <Fragment>
            <tr>
                <td className='tal td_facility'>
                    <p className='td_txt med'>서울제2공장</p>
                    <p className='td_txt op04'>생산공장</p>
                </td>
                <td>
                    <div className='badge_wrap dflx_ac'>
                        <BadgeComponent className={'badge sky'} txt={'건물'} />
                        <BadgeComponent className={'badge blue'} txt={'차량'} />
                    </div>
                </td>
                <td>
                    <div className='badge_wrap'>
                        <div className='badge_line'>
                            <BadgeComponent className={'badge sky_light'} txt={'건물'} />
                            <BadgeComponent className={'badge sky_light'} txt={'생산1동'} />
                            <BadgeComponent className={'badge sky_light'} txt={'생산2동'} />
                            <BadgeComponent className={'badge sky_light'} txt={'생산3동'} />
                        </div>
                        <div className='badge_line'>
                            <BadgeComponent className={'badge blue_light'} txt={'영업 승용1'} />
                            <BadgeComponent className={'badge blue_light'} txt={'영업 승용2'} />
                        </div>
                    </div>
                </td> 
                <td>
                    <p className='td_txt'>
                        <ButtonComponent className={'btn_default little wht'} txt={'문서보기'} onClick={documentPop} />
                    </p>
                </td>
                <td>
                    <div className='td_date'>
                        <p className='date_txt'>2023.03.01</p>
                    </div>
                </td>
                <td>
                    <p className='td_txt use'>사용중</p>
                </td>
                <td>
                    <ButtonComponent className={'btn_default little wht'} txt={'상세보기'} onClick={detailPop} />
                </td>
                <td>
                    <ButtonComponent className={'btn_default little ltgrey'} txt={'수정'} onClick={repairPop} />
                </td>
            </tr>
        </Fragment>
    );
};

export default TrOrgan;
