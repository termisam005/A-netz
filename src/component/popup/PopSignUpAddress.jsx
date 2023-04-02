import React, { Component } from 'react';
import ImgComponent from '../common/ImgComponent';
import SearchComponent from '../common/SearchComponent';
import SignUpAddressList from '../common/SignUpAddressList';


const PopSignUpAddress = ({ open, close }) => {

    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>            
            <div className="pop_body pop_address_search">
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p> 
                <div className="pop_top">
                    <h2 className="h2_b20">회사검색</h2>
                </div>
                <div className="pop_cont address_search_list">
                    <SearchComponent zoneClass="put_zone" className="wrput put_srch" placeholder="Search" btn_tlt="검색"  />

                    <div className="search_scrollbox">
                        <ul className='address_result'>
                            <SignUpAddressList listName={'(주)넷지식품'} listItem={'서울특별시 영등포구 의사당대로 83'} />     
                            <SignUpAddressList listName={'(주)넷지테크'} listItem={'서울특별시 중구 세종대로 100'} /> 
                            <SignUpAddressList listName={'(주)넷지테크'} listItem={'서울특별시 중구 세종대로 100'} />
                            <SignUpAddressList listName={'(주)넷지테크'} listItem={'서울특별시 중구 세종대로 100'} />
                            <SignUpAddressList listName={'(주)넷지테크'} listItem={'서울특별시 중구 세종대로 100'} />
                            <SignUpAddressList listName={'(주)넷지테크'} listItem={'서울특별시 중구 세종대로 100'} />
                            <SignUpAddressList listName={'(주)넷지테크'} listItem={'서울특별시 중구 세종대로 100'} />                         
                        </ul>
                    </div>
                </div>
                <div className="pop_bottom">
                    <button onClick={close} className="btn_default wht">취소</button>
                    <button className="btn_default">확인</button>
                </div>
            </div>
        </div>
    )
}

export default PopSignUpAddress;

