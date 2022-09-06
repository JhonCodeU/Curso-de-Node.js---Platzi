import express from 'express';
import { listUsers } from './controller.js';
import { success, error } from '../../../network/response.js';

const router = express.Router();

router.get('/', (req, res) => {
    const list = listUsers();
    success(req, res, list);
});

export default router;