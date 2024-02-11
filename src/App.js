import React from 'react'
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import ProfileClass from './ProfileClass';
import User from './User';


import './style.css';
import Menu from './Menu';

function App() {
  
  function getData() {
    alert('hello from app');
  }
  return (
    <div className="App">
      <header className="App-header">      
        <img src={logo} className="App-logo" alt="logo" />
        <Menu />
      </header>
        
        <Profile text={{name:'peter'}} data='Profile Data'/>
        <ProfileClass text={{name:'peter'}} data='Profile class Data'/>
      <User data={getData}/>
    </div>
  );
}

export default App;
