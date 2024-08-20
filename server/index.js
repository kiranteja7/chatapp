import express from 'express';
import cors from 'cors';
import { connectToMongoose } from "./config/mongooseConfig.js";
import http from 'http';
import { Server } from 'socket.io';
import { getUsers, addUser, removeUser } from './features/users/users.repository.js';
import { saveMessage, fetchMessages } from './features/messages/messages.repository.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.use(express.json());
app.use(cors());

let activeUsers = [];

io.on('connection', (socket) => {
    console.log('New client connected', socket.id);

    socket.on('newUser', async (user) => {
        user.socketId = socket.id;
        await addUser(user);
        activeUsers = await getUsers();
        io.emit('activeUsers', activeUsers);
    });

    socket.on('sendMessage', async (message) => {
        await saveMessage(message);
        io.emit('receiveMessage', message);
    });

    socket.on('fetchMessages', async () => {
        const messages = await fetchMessages();
        socket.emit('messages', messages);
    });

    socket.on('fetchActiveUsers', () => {
        socket.emit('activeUsers', activeUsers);
    });

    socket.on('typing', (user) => {
        socket.broadcast.emit('typing', user);
    });

    socket.on('logout', () => {
        const index = activeUsers.findIndex((user) => user.socketId === socket.id);
        if (index !== -1) {
          activeUsers.splice(index, 1);  // Remove user from activeUsers
          io.emit('activeUsers', activeUsers);  // Broadcast updated activeUsers
        }
        socket.disconnect();  // Optionally disconnect the socket
      });

    socket.on('disconnect', async () => {
        const userIndex = activeUsers.findIndex((user) => user.socketId === socket.id);
        if (userIndex !== -1) {
            const user = activeUsers[userIndex];

            console.log(user.name);
            await removeUser(user.id);  // Removing the user from the database

            activeUsers.splice(userIndex, 1);  // Remove user from activeUsers array

            io.emit('activeUsers', activeUsers);  // Broadcast the updated activeUsers array
            console.log('Client disconnected', socket.id);
        }
    });
});

server.listen(4000, () => {
    console.log("APP IS LISTENING ON 4000!");
    connectToMongoose();
});
