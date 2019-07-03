import React from 'react'

import './App.css'
import logo from './chats_logo.png';
import TextInput from './TextInput'

class App extends React.Component {
  state = {
    messages: []
  }
  sendMessage = (m) => {
    var { messages } = this.state
    var messages = [...messages, m]
    this.setState({ messages })
  }
  render() {
    var { messages } = this.state
    console.log(messages)
    return (
      <div className="App">
        <header className="app-header">
          <img className="logo" src={logo} alt="logo" />
          Chats
      </header>
        <main>
          {messages.map((msg,i)=>{
            return <div key={i}>
              {msg}
            </div>
          })}
        </main>
        <TextInput sendMessage={this.sendMessage} />
      </div>
    );
  }
}
export default App;
