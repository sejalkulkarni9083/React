import { useState, useRef, useEffect } from 'react'
import {Chatbot} from 'supersimpledev';
import './App.css'

function ChatInput({chatMessages, setChatMessages}) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event){
    setInputText(event.target.value);
  }

  function sendMessage() {
const newChatMessages = [
  ...chatMessages,
  {
    message: inputText,
    sender: 'user',
    id: crypto.randomUUID()
  }
];

// setChatMessages(newChatMessages);

const response = Chatbot.getResponse(inputText);
setChatMessages([
  ...newChatMessages,
  {
    message: response,
    sender:'robot',
    id: crypto.randomUUID()
  }
]);


setInputText('');



  }

        return (
          <div className="chat-input-container">
        <input placeholder = "send a message to chatbot" size="30" onChange={saveInputText} value={inputText} className="chat-input" />
        <button onClick={sendMessage} className="send-button"> 
          send </button>

          </div>
        );

        }



function ChatMessage({message, sender}) {
  return (
    <div className={ sender === 'user'
                    ? 'chat-message-user'
                    : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img src="robot.png" className="chat-message-profile" />
      )}

      <div className="chat-message-text"> {message} </div>
      {sender === 'user' && (
        <img src="user.png" className="chat-message-profile" />
      )}
    </div>
  );
}


function ChatMessages({chatMessages}){
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem){
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  },[chatMessages]);

  return(
    <div className="chat-message-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return(
          <ChatMessage
          message={chatMessage.message}
          sender={chatMessage.sender}
          key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}




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
