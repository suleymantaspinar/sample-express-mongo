require('dotenv').config();

const app = require('./src/app.js');
const logger = require('./src/logger')();
const mongo = require("./src/mongo");

const NODE_PORT = process.env.NODE_PORT;

mongo.connect().then(() => {
  app.listen(NODE_PORT, () => {
    logger.info(`Example app listening on PORT ${NODE_PORT}`);
    console.log("App is listening on", NODE_PORT);
  });
});
