import React from 'react';
import { useSelector } from 'react-redux';
import { setActiveUsers } from '../../redux/reducers/chatReducer.js';
import styles from './activeUser.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import io from 'socket.io-client';

const socket = io('http://localhost:4000');

export const DisplayActiveUsers = () => {
    const dispatch = useDispatch();
    let activeUsers = useSelector((state) => state.chat.activeUsers);
    const navigate = useNavigate();
  
    useEffect(() => {
      socket.emit('fetchActiveUsers');
      socket.on('activeUsers', (users) => {
        dispatch(setActiveUsers(users));
      });
    }, [dispatch]);

    const handleLogout = () => {
        localStorage.removeItem('activeUser');
        socket.emit('logout');
        navigate('/');
      };

    return (
        <>
        <div className={styles.userContainer}>
            <div className={styles.headingOfActive}>
                Connected Users ({activeUsers.length})
            </div>
            {activeUsers.map((user, index) => (
                <div className={styles.activeUser} key={index}>
                    {user.name} <div className={styles.circle}></div>
                </div>
            ))}
        </div>
        <div className={styles.logoutButtonDiv}>
       <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
       </div>
       </>
    );
};
