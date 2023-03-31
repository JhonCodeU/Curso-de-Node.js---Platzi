import remote from "./remote.js";
import config from "../config.js";

export default new remote(config.mysqlService.host, config.mysqlService.port);