 import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="">

    {/* HEADER */}
      <Header />
    {/* APP BODY */}
      <div className="app__body">
        <Sidebar />
        {/* SIDEBAR */}
        {/* FEED
        WIDGETS */}
      </div>
        
    </div>
  );
}

export default App;
