require('dotenv').config();

const app = require('./src/app.js');
const logger = require('./src/logger')();
const mongo = require("./src/mongo");

const PORT = process.env.PORT || 5000;

mongo.connect().then(() => {
  app.listen(PORT, () => {
    logger.info(`Example app listening on PORT ${PORT}`);
    console.log("App is listening on", PORT);
  });
});
