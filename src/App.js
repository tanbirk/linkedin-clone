 import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">

    {/* HEADER */}
      <Header />
    {/* APP BODY */}
      <div className="app__body">
        <Sidebar />
        {/* SIDEBAR */}
        <Feed />
        {/* FEED
        WIDGETS */}
      </div>
        
    </div>
  );
}

export default App;
