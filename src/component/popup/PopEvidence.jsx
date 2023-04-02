import React, { Component } from 'react';
import ButtonComponent from '../common/ButtonComponent';
import ImgComponent from '../common/ImgComponent';


const PopEvidence = ({ open, close }) => {
    
    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>
            <div className="pop_body pop_large">
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="pop_top">
                    <h2 className="h2_b20">증빙 문서 등록</h2>
                </div>
                <div className="pop_cont">
                    <section className='pop_contents'>
                        <table className='netz_table evid_table'>
                            <thead>
                                <tr>
                                    <th className='th_kinds'>문서종류</th>
                                    <th className='th_upload'>업로드</th>
                                    <th>파일명</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='tal'>
                                        <p className='td_txt p-l-10'>건축물 관리대장</p>
                                    </td>
                                    <td>
                                        <div className='file_btwrap'>
                                            <ButtonComponent className={'btn_default sm wht'} txt={'File'} />
                                            <input type="file" className='file_put' />
                                        </div>
                                    </td>
                                    <td className='tal'>
                                        <div className='file_result'>
                                            <p className='td_txt'>A사_건축물관리대장.pdf</p>
                                            <span className='put_check put_delete'>
                                                <ImgComponent src={'del12_circle.svg'} />
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='tal'>
                                        <p className='td_txt p-l-10'>등기부등본</p>
                                    </td>
                                    <td>
                                        <div className='file_btwrap'>
                                            <ButtonComponent className={'btn_default sm wht'} txt={'File'} />
                                            <input type="file" className='file_put' />
                                        </div>
                                    </td>
                                    <td className='tal'>
                                        <div className='file_result'>
                                            <p className='td_txt'>A사_등기부등본.pdf</p>
                                            <span className='put_check put_delete'>
                                                <ImgComponent src={'del12_circle.svg'} />
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='tal'>
                                        <p className='td_txt p-l-10'>임대차계약서</p>
                                    </td>
                                    <td>
                                        <div className='file_btwrap'>
                                            <ButtonComponent className={'btn_default sm wht'} txt={'File'} />
                                            <input type="file" className='file_put' />
                                        </div>
                                    </td>
                                    <td className='tal'>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='tal'>
                                        <p className='td_txt p-l-10'>배출시설 허가증</p>
                                    </td>
                                    <td>
                                        <div className='file_btwrap'>
                                            <ButtonComponent className={'btn_default sm wht'} txt={'File'} />
                                            <input type="file" className='file_put' />
                                        </div>
                                    </td>
                                    <td className='tal'>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='tal'>
                                        <p className='td_txt p-l-10'>유형자산관리대장</p>
                                    </td>
                                    <td>
                                        <div className='file_btwrap'>
                                            <ButtonComponent className={'btn_default sm wht'} txt={'File'} />
                                            <input type="file" className='file_put' />
                                        </div>
                                    </td>
                                    <td className='tal'>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='tal'>
                                        <p className='td_txt p-l-10'>시설배치도</p>
                                    </td>
                                    <td>
                                        <div className='file_btwrap'>
                                            <ButtonComponent className={'btn_default sm wht'} txt={'File'} />
                                            <input type="file" className='file_put' />
                                        </div>
                                    </td>
                                    <td className='tal'>
                                        <div className='file_result'>
                                            <p className='td_txt'>A사_시설배치도.pdf</p>
                                            <span className='put_check put_delete'>
                                                <ImgComponent src={'del12_circle.svg'} />
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='tal'>
                                        <p className='td_txt p-l-10'>차량관리대장</p>
                                    </td>
                                    <td>
                                        <div className='file_btwrap'>
                                            <ButtonComponent className={'btn_default sm wht'} txt={'File'} />
                                            <input type="file" className='file_put' />
                                        </div>
                                    </td>
                                    <td className='tal'>
                                        <div className='file_result'>
                                            <p className='td_txt'>A사_건축물관리대장.pdf</p>
                                            <span className='put_check put_delete'>
                                                <ImgComponent src={'del12_circle.svg'} />
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='tal td_etc'>
                                        <input type="text" className='wrput etc' placeholder='기타입력' />
                                    </td>
                                    <td className='td_etc'>
                                        <div className='file_btwrap'>
                                            <ButtonComponent className={'btn_default sm wht'} txt={'File'} />
                                            <input type="file" className='file_put' />
                                        </div>
                                    </td>
                                    <td className='tal td_etc'>
                                        <div className='file_result dflx_jbet'>
                                            <p className='td_txt'></p>
                                            <p className='trash'>
                                                <ImgComponent src={'trash.svg'} />
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='plus_zone'>
                            <button type='button' className='btn_default wht plus'>
                                <span className='img_plus'>
                                    <ImgComponent src={'plus.png'} />
                                </span>
                            </button>
                        </div>
                    </section>
                </div>
                <div className="pop_bottom">
                    <button onClick={close} className="btn_default wht">취소</button>
                    <button className="btn_default">확인</button>
                </div>
            </div>
        </div>
    )
}

export default PopEvidence;

