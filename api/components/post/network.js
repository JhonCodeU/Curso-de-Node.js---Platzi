import express from 'express';
import controller from './index.js';
import secure from '../auth/secure.js';
import { success, error } from '../../../network/response.js';


const router = express.Router();

/**
 * Post model
 * @typedef {object} Post
 * @property {string} id.required - post id
 * @property {string} text.required - post text
 * @property {string} user_id.required - user id
 */

// Routes
router.get('/', list);

/**
 * GET /api/posts
 * @summary Get all posts
 * @tags Posts
 * @return {array<Post>} 200 - success response - application/json
 */

function list (req, res, next) {
  controller.listPosts().then((list) => {
    success(req, res, list, 200);
  }).catch(next);
}

/**
 * GET /api/posts/{id}
 * @summary Get post by id
 * @tags Posts
 * @param {string} id.path.required - Post id - int64
 * @return {Post} 200 - success response - application/json
 * @return {Error} 404 - Post not found
 */

router.get('/:id', get);

function get (req, res) {
  controller.getPost(req.params.id).then((post) => {
    success(req, res, post, 200);
  }).catch((err) => {
    error(req, res, err, 500);
  });
}

/**
 * POST /api/posts
 * @summary Create a new post
 * @tags Posts
 * @param {Post} request.body.required - posts info - multipart/form-data
 * @return {object} 200 - Post created
 */

router.post('/', secure('create'), upsert);

function upsert (req, res) {
  controller.createPost(req.body).then((post) => {
    success(req, res, post, 201);
  }).catch((err) => {
    error(req, res, err, 500);
  });
}

/**
 * PUT /api/posts/{id}
 * @summary Update post by id
 * @tags Posts
 * @param {string} id.path.required - Post id - int64
 * @param {Post} request.body.required - posts info - multipart/form-data
 * @return {object} 200 - Post updated
 */

router.put('/:id', update);

function update (req, res) {
  controller.updatePost(req.params.id, req.body).then((post) => {
    success(req, res, post, 200);
  }).catch((err) => {
    error(req, res, err, 500);
  });
}

/**
 * DELETE /api/posts/{id}
 * @summary Delete post by id
 * @tags Posts
 * @param {string} id.path.required - Post id - int64
 * @return {object} 200 - Post deleted
 * @return {Error} 404 - Post not found
 */

router.delete('/:id', secure('remove'), remove);

function remove (req, res) {
  controller.deletePost(req.params.id).then((post) => {
    success(req, res, post, 200);
  }).catch((err) => {
    error(req, res, err, 500);
  });
}

export default router;