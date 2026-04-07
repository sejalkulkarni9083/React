import { useState, useRef, useEffect } from 'react'
import './App.css'

import { ChatInput} from './components/ChatInput'
import { ChatMessage} from './components/ChatMessage';
import { ChatMessages} from './components/ChatMessages';



function App() {
  const [chatMessages, setChatMessages] = useState([{
    message: 'hello chatbot',
    sender: 'user',
    id:'id1'
  },{
    message: 'Hello, How can i help you?',
    sender: 'robot',
    id:'id2'
},{
  message: ' Can you get me todays date?',
    sender: 'user',
    id:'id3'
},{
  message: ' Today is september 27',
    sender: 'robot',
    id:'id4'
}
]);

  return (
    <div className="app-container">
      <ChatMessages
      chatMessages={chatMessages}
      />

      <ChatInput 
      chatMessages={chatMessages}
      setChatMessages={setChatMessages}
      />

    </div>
  );
}

export default App
