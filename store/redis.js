// All the redis related code goes here
import redis from 'redis';
import config from '../config.js';

const client = redis.createClient({
  host: config.redis.host,
  port: config.redis.port,
  password: config.redis.password,
});

function list (table) {
  return new Promise((resolve, reject) => {
    client.get(table, (err, data) => {
      if (err) return reject(err);

      let res = data || null;
      if (data) {
        res = JSON.parse(data);
      }
      return resolve(res);
    });
  });
}

async function get (table, id) {
  let key = table + '_' + id;
  return await list(key);
}

async function upsert (table, data) {
  let key = table + '_' + data.id;
  client.setex(key, 10, JSON.stringify(data));
  return true;
}

client.on('connect', () => {
  console.log('Redis client connected');
});

client.on('error', (err) => {
  console.log(`Something went wrong ${err}`);
});

export {
  list,
  get,
  upsert,
}