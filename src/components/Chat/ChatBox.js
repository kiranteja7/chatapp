import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../../redux/socket.js';
import styles from './chatBox.module.css';
import image from '../../assets/8c98994518b575bfd8c949e91d20548b.jpg';
import { addMessage, addTypingUser, removeTypingUser } from '../../redux/reducers/chatReducer.js';

export const ChatBox = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const activeUser = useSelector((state) => state.chat.activeUser);
    const messages = useSelector((state) => state.chat.messages);
    const typingUsers = useSelector((state) => state.chat.typingUsers);

    // Handle receiving messages
    useEffect(() => {
      const handleReceiveMessage = (message) => {
        dispatch(addMessage(message));
      };

      socket.on('receiveMessage', handleReceiveMessage);

      // Clean up the event listener on component unmount
      return () => {
        socket.off('receiveMessage', handleReceiveMessage);
      };
    }, [dispatch]);

    // Handle typing users
    useEffect(() => {
      const handleTyping = (user) => {
        dispatch(addTypingUser(user));

        // Remove typing status after 3 seconds
        setTimeout(() => {
          dispatch(removeTypingUser(user));
        }, 3000);
      };

      socket.on('typing', handleTyping);

      return () => {
        socket.off('typing', handleTyping);
      };
    }, [dispatch]);

    // Send a message
    const handleSend = () => {
      if (message.trim() !== '') {
        const messageData = {
          user: activeUser.name,
          content: message,
          logo: activeUser.logo,  // Assuming activeUser has a logo
          timestamp: Date.now(),
        };

        socket.emit('sendMessage', messageData);
        setMessage('');  // Clear the input field after sending
      }
    };

    // Notify typing event
    const handleTyping = () => {
      if (activeUser && activeUser.name) {
        socket.emit('typing', activeUser.name);
      }
    };

    return (
        <>
        <div className={styles.chatBoxContainer} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.chatHeader}>
                <div className={styles.circle}></div>
                <div className={styles.welcomeMessage}>Welcome {activeUser ? activeUser.name : 'Guest'}</div>
                <div className={styles.typer}>{typingUsers.length > 0 ? `${typingUsers[0]} is typing...` : ''}</div>
            </div>
            <div className={styles.chat}>
                {messages.map((msg, index) => (
                    <div className={styles.chatDetails} key={index}>
                        <img src={msg.logo} className={styles.logo} alt='user-logo'/>
                        <div className={styles.userMessage}>
                            <p className={styles.users}>{msg.user}</p>
                            <p className={styles.messages}>{msg.content}</p>
                        </div>
                        <p className={styles.time}>{new Date(msg.timestamp).toLocaleTimeString()}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className={styles.inputContainer}>
            <input
                type="text"
                placeholder='Send message'
                className={styles.chatInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleTyping}
            />
            <button className={styles.sendButton} onClick={handleSend}>Send</button>
        </div>
        </>
    );
};
