import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './loginform.module.css';
import { useNavigate } from 'react-router-dom';
import { setActiveUser } from '../../redux/reducers/chatReducer';

import io from 'socket.io-client';

const socket = io('http://localhost:4000');

export const LoginForm = () => {
    const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && logo) {
      const userData = { name, logo, socketId: socket.id };
      localStorage.setItem('activeUser', JSON.stringify(userData));
      dispatch(setActiveUser(userData));
      socket.emit('newUser', userData);
      navigate('/chat');
    }
  };

    return (
        <div className={styles.form}>
            <div className={styles.formElements}>
                <h1 className={styles.heading1}>Welcome to Chatter Up</h1>
                <span className={styles.span}>Please provide logo and name to continue</span>
                <div className={styles.inputContainer}>
                    <label htmlFor="name">Enter your Full name:</label>
                    <input
                        className={styles.inputs}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        id="name"
                        placeholder='Example: John Doe'
                    />
                    <label htmlFor="logo">Please provide image for logo:</label>
                    <input
                        className={styles.inputs}
                        type="text"
                        value={logo}
                        onChange={(e) => setLogo(e.target.value)}
                        name="logo"
                        id="logo"
                        placeholder='Example: https://example.com/logo.png'
                    />
                    <button className={styles.submitBtn} type="button" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};
