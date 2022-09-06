const db = {
    'user': [
        { id: '1', name: 'John Doe' },
        { id: '2', name: 'Paris hilton' },
    ]
};

async function list (table) {
    return await db[table]
}
async function get (id, table) {
    let collection = await list(table);
    return collection.filter(item => item.id === id)[0] || null;
}

async function upsert (table, data) {
    db[collection].push(data);
    return true;
}

async function remove (id) {
    return true;
}

export {
    list,
    get,
    upsert,
    remove,
}