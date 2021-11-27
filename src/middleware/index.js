const { bodyParser } = require('./body-parser');
const { cors } = require('./cors');
const { validateRecords } = require('./validate-records');
const { reqLogger } = require('./req-logger');
const { handleErrors } = require('./handle-errors');
const { notFound } = require('./not-found');

module.exports = {
  bodyParser,
  cors,
  validateRecords,
  reqLogger,
  handleErrors,
  notFound
};