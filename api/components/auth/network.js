import express from 'express';
import controller from './index.js';
import { success, error } from '../../../network/response.js';

const router = express.Router();

/**
 * POST /api/login
 * @summary login user
 * @tags Login
 * @param {User} request.body.required - users info - multipart/form-data
 * @return {object} 200 - User created
 */
router.post('/login', (req, res) => {
    controller.login(req.body.username, req.body.password).then((token) => {
        success(req, res, token, 200);
    }).catch((err) => {
        error(req, res, err, 500);
    });
});

export default router;