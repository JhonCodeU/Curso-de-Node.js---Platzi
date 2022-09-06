import { list, get, upsert, remove } from '../../../store/dummy.js';
import { nanoid } from 'nanoid';
const TABLE = 'user';

export default function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        return;
    }

    function listUsers(req, res) {
        return list(TABLE)
    }

    function getUser (id) {
        return get(id, TABLE);
    }

    function createUser (data) {
        const user = {
            id: data.id || nanoid(),
            name: data.name,
        };
        return upsert(TABLE, user);
    }
    
    function deleteUser (id) {
        return remove(id, TABLE);
    }

    return {
        listUsers,
        getUser,
        createUser,
        deleteUser,
    }
}