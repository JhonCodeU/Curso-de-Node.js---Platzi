const db = {
    'user': [
        { id: '1', name: 'John Doe' },
        { id: '2', name: 'Paris hilton' },
    ]
};

async function list (table) {
    return await db[table] || [];
}
async function get (id, table) {
    let collection = await list(table);
    return collection.filter(item => item.id === id)[0] || null;
}

async function upsert (collection, data) {
    
    if (!db[collection]) {
        db[collection] = [];    
    }
    
    db[collection].push(data);
}

async function remove (id, collection) {
    db[collection] = db[collection].filter(item => item.id !== id);
    return true;
}

async function query (table, query) {
    let collection = await list(table);
    let keys = Object.keys(query);
    return collection.filter(item => {
        return keys.every(key => item[key] === query[key]);
    })[0] || null;
}

export {
    list,
    get,
    upsert,
    remove,
    query
}