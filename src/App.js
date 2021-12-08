 
import React from 'react';
import './App.css';
import { selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar'
import Login from './Login';
import { useSelector } from 'react-redux';


function App() {
  const user = useSelector(selectUser)



  return (
    <div className="app">

    {/* HEADER */}
      <Header />
     
     {!user ? (
       <Login />
     ) : (
      <div className="app__body">
        <Sidebar />
        
        <Feed />
    
      </div>
     )}

  
     
        
    </div>
  );
}

export default App;
