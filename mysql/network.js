import express from 'express';
import { success, error } from '../network/response.js';
import { list, get, upsert, update, remove } from '../store/mysql.js';

const router = express.Router();

router.get('/:table', listDB);
router.get('/:table/:id', getDB);
router.post('/:table', insert);
router.put('/:table', upsertDB);

async function listDB (req, res, next) {
  try {
    const data = await list(req.params.table);
    success(req, res, data, 200);
  } catch (error) {
    next(error);
  }
}

async function getDB (req, res, next) {
  try {
    const data = await get(req.params.table, req.params.id);
    success(req, res, data, 200);
  } catch (error) {
    next(error);
  }
}

async function insert (req, res, next) {
  try {
    const data = await upsert(req.body);
    success(req, res, data, 201);
  } catch (error) {
    next(error);
  }
}

async function upsertDB (req, res, next) {
  try {
    const data = await update(req.body);
    success(req, res, data, 201);
  } catch (error) {
    next(error);
  }
}

export default router;