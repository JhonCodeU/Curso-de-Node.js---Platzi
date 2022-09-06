import express from 'express';
import controller from './index.js';
import { success, error } from '../../../network/response.js';

const router = express.Router();

/**
 * User model
 * @typedef {object} User
 * @property {string} name.required - user name
 * @property {integer} id - User id- int64
 */

/**
 * GET /api/users
 * @summary Get all users
 * @tags Users
 * @return {array<User>} 200 - success response - application/json
 */
router.get('/', (req, res) => {
    controller.listUsers().then((list) => {
        success(req, res, list, 200);
    }).catch((err) => {
        error(req, res, err, 500);
    });
});

/**
 * GET /api/users/{id}
 * @summary Get user by id
 * @tags Users
 * @param {integer} id.path.required - User id - int64
 * @return {User} 200 - success response - application/json
 */
router.get('/:id', (req, res) => {
    controller.getUser(req.params.id).then((user) => {
        success(req, res, user, 200);
    }).catch((err) => {
        error(req, res, err, 500);
    });
});

/**
 * POST /api/users
 * @summary Create a new user
 * @tags Users
 * @param {User} request.body.required - users info - multipart/form-data
 * @return {object} 200 - User created
 */
router.post('/', (req, res) => {
    controller.createUser(req.body).then((user) => {
        success(req, res, user, 201);
    }).catch((err) => {
        error(req, res, err, 500);
    });
});

/**
 * PUT /api/users/{id}
 * @summary Update user by id
 * @tags Users
 * @param {integer} id.path.required - User id - int64
 * @param {User} request.body.required - users info - multipart/form-data
 * @return {object} 200 - User updated
 */
router.put('/:id', (req, res) => {
    controller.updateUser(req.params.id, req.body).then((user) => {
        success(req, res, user, 200);
    }).catch((err) => {
        error(req, res, err, 500);
    });
});

/**
 * DELETE /api/users/{id}
 * @summary Delete user by id
 * @tags Users
 * @param {integer} id.path.required - User id - int64
 * @return {object} 200 - User deleted
 * @return {object} 404 - User not found
 * @return {object} 500 - Internal server error
 */
router.delete('/:id', (req, res) => {
    controller.deleteUser(req.params.id).then((user) => {
        success(req, res, user, 200);
    }).catch((err) => {
        error(req, res, err, 500);
    });
});

export default router;