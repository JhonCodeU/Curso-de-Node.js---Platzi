import { list, get, upsert, remove } from '../../../store/dummy.js';
import { nanoid } from 'nanoid';
import auth from '../auth/index.js';
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

    async function createUser (data) {
        const user = {
            id: data.id || nanoid(),
            name: data.name,
            username: data.username,
            password: data.password
        };

        if (data.password || data.username) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: data.password
            });
        }
        
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