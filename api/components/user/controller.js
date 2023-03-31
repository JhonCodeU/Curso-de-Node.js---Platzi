import { list, get, upsert, update, remove, query } from '../../../store/mysql.js';
//import { list, get, upsert, remove, update } from '../../../store/mysql.js';
import { nanoid } from 'nanoid';
import auth from '../auth/index.js';
const TABLE = 'user';

export default function (injectedStore, injectedCache) {
    let cache = injectedCache;
    let store = injectedStore;
    if (!store) {
        return;
    }

    if (!cache) {
        cache = store;
    }

    async function listUsers () {
        let users = await cache.list(TABLE);

        if (!users) {
            console.log('No estaba en caché, buscando en DB');
            users = await list(TABLE);
            cache.upsert(TABLE, users);
        } else {
            console.log('Datos traidos desde caché');
        }

        return users;
    }

    function getUser (id) {
        return get(TABLE, id);
    }

    async function createUser (data) {
        const user = {
            id: data.id || nanoid(),
            name: data.name,
            username: data.username
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

    function updateUser (id, data) {
        return update(TABLE, { id, ...data });
    }

    function deleteUser (id) {
        return remove(TABLE, id);
    }

    function follow (from, to) {
        return upsert(TABLE + '_follow', {
            user_from: from,
            user_to: to
        });
    }

    async function following (user) {
        const join = {};
        join[TABLE] = 'user_to';
        const queryUser = { user_from: user };
        console.log(queryUser);

        return await query(TABLE + '_follow', queryUser, join);
    }

    return {
        listUsers,
        getUser,
        createUser,
        deleteUser,
        updateUser,
        follow,
        following,
    }
}