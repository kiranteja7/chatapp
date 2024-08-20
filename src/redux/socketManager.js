// import { io } from 'socket.io-client';
// import { store } from './store.js';
// import { updateConnectedUsers, setTypingUser, addMessage } from './reducers/chatReducer.js';

// const socket = io('http://localhost:4000');

// const setupSocketListeners = (socket) => {
//     socket.on('connect', () => {
//         console.log('Socket connected:', socket.id);

//         socket.on('receiveMessage', (data) => {
//             store.dispatch(addMessage(data));
//         });

//         socket.on('connectedUsers', (users) => {
//             console.log('Connected users:', users);
//             store.dispatch(updateConnectedUsers(users));
//         });

//         socket.on('userTyping', (user) => {
//             console.log('User typing:', user);
//             store.dispatch(setTypingUser(user));
//         });

//         socket.on('userStopTyping', () => {
//             console.log('User stopped typing');
//             store.dispatch(setTypingUser(null));
//         });

//         socket.on('previousMessages', (messages) => {
//             console.log('Previous messages:', messages);
//             messages.forEach((message) => {
//                 store.dispatch(addMessage(message));
//             });
//         });

//         socket.emit('fetchPreviousMessages');
//     });

//     socket.on('disconnect', () => {
//         console.log('Socket disconnected');
//     });
// };

// export { socket, setupSocketListeners };
