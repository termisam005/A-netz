import React, { Fragment } from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import SelectComponent from '../common/SelectComponent';
import InputComponent from '../common/InputComponent';


const TrDataActivity = () => {

    const [listActive, setListActive] = useState(false);
    const deleteList = () => {
        setListActive(true);
    }
    
    return (
        <Fragment>
            <tr className={listActive ? 'tr_datas del':'tr_datas'}>
                <td>
                    <SelectComponent className={'selector'}>
                        <option value="">Scope 1</option>
                        <option value="">Scope 2</option>
                        <option value="">Scope 3</option>
                    </SelectComponent>
                </td>
                <td>
                    <SelectComponent className={'selector'}>
                        <option value="">고정연소원</option>
                        <option value="">이동연소원</option>
                    </SelectComponent>
                </td>
                <td>
                    <InputComponent className={'wrput'} value={'난방 보일러 1'} />
                </td>
                <td>
                    <SelectComponent className={'selector'}>
                        <option value="">연료</option>
                        <option value="">전기</option>
                        <option value="">스팀</option>
                    </SelectComponent>
                </td>
                <td>
                    <SelectComponent className={'selector'}>
                        <option value="">도시가스(LNB)</option>
                        <option value="">도시가스(LPG)</option>
                        <option value="">경유</option>
                    </SelectComponent>
                </td>
                <td>
                    <InputComponent className={'wrput usage'} value={'1,000'} />
                </td>
                <td>
                    <SelectComponent className={'selector'}>
                        <option value="">Nm3</option>
                        <option value="">Kwh</option>
                    </SelectComponent>
                </td>
                <td className='td_delete'>
                    <p className='del20' onClick={deleteList}>
                        <ImgComponent src={'del20.svg'} />
                    </p>
                </td>
            </tr>
        </Fragment>
    );
};

export default TrDataActivity;
