import React from 'react';
import './App.css';
import Navbar from './Navbar';
import LoopingVideo from './LoopingVideo';
import Companymessage from './Companymessage';
import CategoryByPicture from './CategorybyPicture';

function App() {
  return (
    <div>
      <Navbar/>
      <LoopingVideo/>
      <Companymessage/>
      <CategoryByPicture/>
    </div>
  );
}

export default App;
