import express from 'express';
import { getMessages, storeMessage } from './messages.controllers.js';

const router = express.Router();

router.get('/messages', getMessages);
router.post('/messages', storeMessage);

export default router;
