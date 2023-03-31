import express from "express";
import config from "../config.js";
import router from "./network.js";

const app = express();

app.use(express.json());

// Routes
app.use('/', router);

app.listen(config.mysqlService.port, () => {
  console.log(`Server mysql on port ${config.mysqlService.port}`);
});
