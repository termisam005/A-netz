import React, { Component } from 'react';
import '../styles/_test.scss';
import ImgComponent from '../component/common/ImgComponent';


const Test = () => {
  
  return (
    <div className='p-b-100'>
      <h1>Test</h1>
      <ImgComponent src={'leaf_on.svg'} />

      <div className='m-b-100'></div>

      <article className='kit_center'>

        <div className='ex_scroll'>
          <div className='ex_sc_cont'></div>
        </div>

        <p className='m-b-100'></p>

      </article>
    </div>
  );
}

export default Test;

