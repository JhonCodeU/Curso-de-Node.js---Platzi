import { list, get, upsert, remove } from '../../../store/dummy.js';

const TABLE = 'user';

function listUsers(req, res) {
    return list(TABLE)
}

export {
    listUsers
}