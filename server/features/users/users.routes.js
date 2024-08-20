import express from 'express';
import {
    fetchUsers,
    createUser,
    loginUser,
    logoutUser,
    getUser,
} from './users.controller.js';


const router = express.Router();

router.get('/', fetchUsers);
router.post('/', createUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/:userId', getUser);

export default router;
