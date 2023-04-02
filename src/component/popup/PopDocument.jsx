import React, { Component } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonComponent from '../common/ButtonComponent';
import DocuComponent from '../common/DocuComponent';
import DocuListComponent from '../common/DocuListComponent';


const PopDocument = ({ open, close }) => {

    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>

            <div className="pop_body pop_medium_new">
                <p onClick={close} className="del24">
                    <ImgComponent src={'del24.svg'} />
                </p>
                <div className="popn_top">
                    <h2 className="h2_b20">관련문서</h2>
                </div>
                <div className="popn_cont">
                    <section className='popn_grey'>
                        <p className='pgrey_txt'>서울1공장</p>
                    </section>
                    <section className='popn_contain document scroll'>
                        <DocuListComponent listClass={'docu_list'} dlClass={'docu_dl'} title={'건축물 관리대장'} fileClass={'ducu_file'} fileName={'filename.jpg'} 
                        buttonClass={'btn_default sm blgrey'} buttonTxt={'다운로드'} onClick={''} />
                        <DocuListComponent listClass={'docu_list'} dlClass={'docu_dl'} title={'건축물 관리대장'} fileClass={'ducu_file'} fileName={'filename.jpg'} 
                        buttonClass={'btn_default sm blgrey'} buttonTxt={'다운로드'} onClick={''} />
                        <DocuListComponent listClass={'docu_list'} dlClass={'docu_dl'} title={'건축물 관리대장'} fileClass={'ducu_file'} fileName={'filename.jpg'} 
                        buttonClass={'btn_default sm blgrey'} buttonTxt={'다운로드'} onClick={''} />
                        <DocuListComponent listClass={'docu_list'} dlClass={'docu_dl'} title={'건축물 관리대장'} fileClass={'ducu_file'} fileName={'filename.jpg'} 
                        buttonClass={'btn_default sm blgrey'} buttonTxt={'다운로드'} onClick={''} />
                        <DocuListComponent listClass={'docu_list'} dlClass={'docu_dl'} title={'건축물 관리대장'} fileClass={'ducu_file'} fileName={'filename.jpg'} 
                        buttonClass={'btn_default sm blgrey'} buttonTxt={'다운로드'} onClick={''} />
                        <DocuListComponent listClass={'docu_list'} dlClass={'docu_dl'} title={'건축물 관리대장'} fileClass={'ducu_file'} fileName={'filename.jpg'} 
                        buttonClass={'btn_default sm blgrey'} buttonTxt={'다운로드'} onClick={''} />
                        <DocuListComponent listClass={'docu_list'} dlClass={'docu_dl'} title={'건축물 관리대장'} fileClass={'ducu_file'} fileName={'filename.jpg'} 
                        buttonClass={'btn_default sm blgrey'} buttonTxt={'다운로드'} onClick={''} />
                        <DocuListComponent listClass={'docu_list'} dlClass={'docu_dl'} title={'건축물 관리대장'} fileClass={'ducu_file'} fileName={'filename.jpg'} 
                        buttonClass={'btn_default sm blgrey'} buttonTxt={'다운로드'} onClick={''} />
                    </section>
                </div>
                <div className="popn_bottom">
                    <button onClick={close} className="btn_default">닫기</button>
                </div>
            </div>

        </div>
    )
}

export default PopDocument;

