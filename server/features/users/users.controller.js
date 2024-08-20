// import {
//     getUsers,
//     addUser,
//     updateUserSocket,
//     removeUserBySocketId,
//     getUserById,
// } from './users.repository.js';

// export const fetchUsers = async (req, res) => {
//     try {
//         const users = await getUsers();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching users' });
//     }
// };

// export const createUser = async (req, res) => {
//     try {
//         const user = await addUser(req.body);
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ error: 'Error creating user' });
//     }
// };

// export const loginUser = async (req, res) => {
//     const { userId, socketId } = req.body;
//     try {
//         const user = await updateUserSocket(userId, socketId);
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ error: 'Error logging in user' });
//     }
// };

// export const logoutUser = async (req, res) => {
//     const { socketId } = req.body;
//     try {
//         const user = await removeUserBySocketId(socketId);
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ error: 'Error logging out user' });
//     }
// };

// export const getUser = async (req, res) => {
//     try {
//         const user = await getUserById(req.params.userId);
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching user' });
//     }
// };
