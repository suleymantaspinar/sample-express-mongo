const { bodyParser } = require('./body-parser');
const { cors } = require('./cors');
const { validateRecords } = require('./validate-records');
const { reqLogger } = require('./req-logger');
const { handleErrors } = require('./handle-errors');

module.exports = {
  bodyParser,
  cors,
  validateRecords,
  reqLogger,
  handleErrors
};