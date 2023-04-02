import React, { Component } from 'react';
import { useNavigate } from 'react-router';


const TestMain = () => {
  const navigator = useNavigate();
  return (
    <div>
      <h1>main</h1>
      <button onClick={() => navigator('/test')}>go to Test</button>
      <div>
        <br />
        <button onClick={() => navigator('/grid')}>go to Grid</button>
      </div>
      <div>
        <br />
        <button onClick={() => navigator('/scroll1')}>go to Scroll</button>
      </div>
      <div></div>
      <div>
        <br />
        <button onClick={() => navigator('/kit')}>go to Kit</button>
      </div>
      <div>
        <br />
        <button onClick={() => navigator('/Discharge')}>go to Discharge</button>
      </div>
    </div>
  );
}

export default TestMain;
