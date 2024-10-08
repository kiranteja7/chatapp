import io from 'socket.io-client';

// const socket = io('http://localhost:4000');
const socket = io('https://chatappbackend-eikz.onrender.com/');

socket.on('connect', () => {
    console.log('Connected to server with socket ID:', socket.id);
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

export default socket;
