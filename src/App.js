import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestMain from './page/TestMain';
import Test from './page/Test';
import GridTest from './page/GridTest';
import MenuTest from './page/MenuTest';
import SelectTest from './page/SelectTest';
import ScrollTest1 from './page/ScrollTest1';
import ScrollTest2 from './page/ScrollTest2';
import Kit from './page/Kit';
import KeyframeTest from './page/KeyframeTest';
import HelpTest from './page/HelpTest';

import Main from './pages/Main';
import Main1 from './pages/Main1';
import Users from './pages/Users';
import Dashboard from './pages/Dashboard';
import Dashboard1 from './pages/Dashboard1';
import Discharge from './pages/Discharge';
import DataActivity from './pages/DataActivity';
import DataActivityView from './pages/DataActivityView';
import Analysis from './pages/Analysis';
import Analysis1 from './pages/Analysis1';
import SignUp1 from './pages/signup/SignUp1';
import SignUp2 from './pages/signup/SignUp2';
import SignUp3 from './pages/signup/SignUp3';
import MemberModify from './pages/signup/MemberModify';

import NewSignUp2 from './pages/signup/NewSignUp2';
import NewSignUp3 from './pages/signup/NewSignUp3';
import SettOrgan from './pages/SettOrgan';
import ReduceTarget from './pages/ReduceTarget';
import ReduceTarget1 from './pages/ReduceTarget1';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={'/testmain'} element={<TestMain />} />
          <Route path={'/test'} element={<Test />} />
          <Route path={'/grid'} element={<GridTest />} />
          <Route path={'/menutest'} element={<MenuTest />} />
          <Route path={'/select'} element={<SelectTest />} />
          <Route path={'/scroll1'} element={<ScrollTest1 />} />
          <Route path={'/scroll2'} element={<ScrollTest2 />} />
          <Route path={'/kit'} element={<Kit />} />
          <Route path={'/keyframe'} element={<KeyframeTest />} />
          <Route path={'/helptest'} element={<HelpTest />} />

          <Route path={'/'} element={<Main1 />} />
          <Route path={'/main'} element={<Main />} />
          <Route path={'/Dashboard'} element={<Dashboard />} />
          <Route path={'/Dashboard1'} element={<Dashboard1 />} />
          <Route path={'/SettOrgan'} element={<SettOrgan />} />
          <Route path={'/Users'} element={<Users />} />
          <Route path={'/Discharge'} element={<Discharge />} />
          <Route path={'/DataActivity'} element={<DataActivity />} />
          <Route path={'/ViewDataActivity'} element={<DataActivityView />} />
          <Route path={'/Analysis'} element={<Analysis />} />
          <Route path={'/Analysis1'} element={<Analysis1 />} />
          <Route path={'/SignUp1'} element={<SignUp1 />} />
          <Route path={'/SignUp2'} element={<SignUp2 />} />
          <Route path={'/SignUp3'} element={<SignUp3 />} />
          <Route path={'/newSignUp2'} element={<NewSignUp2 />} />
          <Route path={'/newSignUp3'} element={<NewSignUp3 />} />
          <Route path={'/MemberModify'} element={<MemberModify />} />
          <Route path={'/ReduceTarget'} element={<ReduceTarget />} />
          <Route path={'/ReduceTarget1'} element={<ReduceTarget1 />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
