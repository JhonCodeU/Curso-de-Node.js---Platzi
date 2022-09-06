const db = {
    'user': [
        { id: '1', name: 'John Doe' },
        { id: '2', name: 'Paris hilton' },
    ]
};

function list (table) {
    return db[table]
}
function get (id, table) {
    let collection = list(table);
    return collection.filter(item => item.id === id)[0] || null;
}

function upsert (table, data) {
    db[collection].push(data);
    return true;
}

function remove (id, table) {
    return true;
}

export {
    list,
    get,
    upsert,
    remove,
}