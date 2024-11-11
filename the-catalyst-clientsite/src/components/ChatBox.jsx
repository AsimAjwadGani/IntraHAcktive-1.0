import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000'); // Update with your backend URL if necessary

const ChatBox = ({ clubId, isOcaAdmin }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const sender = isOcaAdmin ? 'OCA Admin' : 'Club Member';

  useEffect(() => {
    if (clubId) {
      socket.emit('joinRoom', clubId);

      // Fetch previous messages from the backend
      fetch("http://localhost:5000/messages/${clubId}")
        .then(response => response.json())
        .then(data => setMessages(data))
        .catch(error => console.error('Error fetching messages:', error));
    }

    // Listen for incoming messages
    socket.on('receiveMessage', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off();
    };
  }, [clubId]);

  const sendMessage = () => {
    if (message.trim()) {
      const chatMessage = { clubId, message, sender };
      socket.emit('sendMessage', chatMessage);
      setMessages([...messages, chatMessage]);
      setMessage('');
    }
  };

  return (
    <div className="chatbox">
      <div className="chatbox-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'OCA Admin' ? 'message oca' : 'message'}>
            <strong>{msg.sender}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;