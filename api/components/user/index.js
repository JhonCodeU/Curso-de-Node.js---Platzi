import config from '../../../config.js';
import controller from './controller.js';

let store, cache;
if (config.remoteDB === true) {
  store = import('../../../store/remote-mysql.js');
  cache = import('../../../store/remote-cache.js');
} else {
  store = import('../../../store/mysql.js');
  cache = import('../../../store/redis.js');
}

const crtl = controller(store, cache);

export default crtl;