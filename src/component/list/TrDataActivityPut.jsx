import React, { Fragment } from 'react';
import ButtonComponent from '../common/ButtonComponent';
import InputComponent from '../common/InputComponent';
import FileResultComponent from '../common/FileResultComponent';


const TrDataActivityPut = () => {

    return (
        <Fragment>
            <tr className={'tr_datas'}>
                <td>
                    <InputComponent className={'wrput'} value={'Scope 1'} disabled={'disabled'} />
                </td>
                <td>
                    <InputComponent className={'wrput'} value={'공정 배출원'} disabled={'disabled'} />
                </td>
                <td>
                    <InputComponent className={'wrput'} value={'판유리 생산 시설'} disabled={'disabled'} />
                </td>
                <td>
                    <InputComponent className={'wrput'} value={'전기'} disabled={'disabled'} />
                </td>
                <td>
                    <InputComponent className={'wrput'} value={'판유리'} disabled={'disabled'} />
                </td>
                <td>
                    <InputComponent className={'wrput usage'} value={'1,000'} />
                </td>
                <td>
                    <InputComponent className={'wrput'} value={'Kwh'} disabled={'disabled'} />
                </td>
                <td>
                    <InputComponent className={'wrput recycle'} value={'100'} />
                </td>
                <td>
                    <InputComponent className={'wrput'} value={'Tier1'} disabled={'disabled'} />
                </td>
                <td>
                    <div className="form_file_upload">
                        <div className="file_btwrap">
                            <input type="file" className="file_put" />
                            <ButtonComponent type={'button'} className={'btn_default bit ltgrey'} txt={'파일첨부'} />
                        </div>
                        <div className='w130'>
                            <FileResultComponent resultClass={'file_result p-l-6'} txtClass={'p_r14'} file={'2211_본관LNG사업자등록증.pdf'} />
                        </div>
                    </div>
                </td>
            </tr>
        </Fragment>
    );
};

export default TrDataActivityPut;
