import { list, get, upsert, remove } from '../../../store/dummy.js';
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
        console.log(data);
        return upsert(TABLE, data);
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