import React from 'react'

import './App.css'
import logo from './chats_logo.png';
import TextInput from './TextInput'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img className="logo" src={logo} alt="logo"/>
        Chats
      </header>
      
      <TextInput />
    </div>
  );
}

export default App;
