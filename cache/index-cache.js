import express from "express";
import config from "../config.js";
import router from "./network.js";

const app = express();

app.use(express.json());

// Routes
app.use('/', router);

app.listen(config.cacheService.port, () => {
  console.log(`Server cache redis on port ${config.cacheService.port}`);
});
