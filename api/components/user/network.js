import express from 'express';
import controller from './index.js';
import { success, error } from '../../../network/response.js';

const router = express.Router();

router.get('/', (req, res) => {
    controller.listUsers().then((list) => {
        success(req, res, list, 200);
    }).catch((err) => {
        error(req, res, err, 500);
    });
});

router.get('/:id', (req, res) => {
    controller.getUser(req.params.id).then((user) => {
        success(req, res, user, 200);
    }).catch((err) => {
        error(req, res, err, 500);
    });
});

router.post('/', (req, res) => {
    controller.createUser(req.body).then((user) => {
        success(req, res, user, 201);
    }).catch((err) => {
        error(req, res, err, 500);
    });
});

router.delete('/:id', (req, res) => {
    controller.deleteUser(req.params.id).then((user) => {
        success(req, res, user, 200);
    }).catch((err) => {
        error(req, res, err, 500);
    });
});

export default router;