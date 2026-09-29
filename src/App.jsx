import { useState } from 'react'

import Header from './components/Header'
import MsgContainer from './components/MsgContainer';
import MessageInput from './components/MessageInput';

import './App.css'

function App() {
  const [messages, addMessage] = useState([]);

  return (
    <main id='container'>
      <Header />
      <MsgContainer messages={messages} />
      <MessageInput messages={messages} addMessage={addMessage} />
    </main>
  )
}

export default App
