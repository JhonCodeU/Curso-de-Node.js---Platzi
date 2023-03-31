import config from '../../../config.js';
import controller from './controller.js';

let store;
if (config.remoteDB === true) {
  store = import('../../../store/remote-mysql.js');
} else {
  store = import('../../../store/mysql.js');
}

const crtl = controller(store);

export default crtl;