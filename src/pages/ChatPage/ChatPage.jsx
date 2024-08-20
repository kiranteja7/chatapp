import React from 'react';
import { DisplayActiveUsers } from '../../components/ActiveUser/ActiverUserDisplay.js';
import { ChatBox } from '../../components/Chat/ChatBox.js';
import styles from './chatPage.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import io from 'socket.io-client';
import { setMessages, setActiveUser } from '../../redux/reducers/chatReducer.js';

const socket = io('http://localhost:4000');

export const ChatPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    useEffect(() => {
      const storedUser = localStorage.getItem('activeUser');
      if (storedUser) {
        dispatch(setActiveUser(JSON.parse(storedUser)));
      } else {
         navigate('/');
      }
  
      socket.emit('fetchMessages');
      socket.on('messages', (messages) => {
        dispatch(setMessages(messages));
      });
  
      socket.emit('fetchActiveUsers');
    }, [dispatch, navigate]);


    return (
        <div className={styles.chatPageContainer}>
            <div className={styles.chatPage}>
                <ChatBox />
            </div>
            <div className={styles.displayUsers}>
                <DisplayActiveUsers />
            </div>
        </div>
    );
};