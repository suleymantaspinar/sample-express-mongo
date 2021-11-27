const morgan = require('morgan');

const reqLogger = morgan('combined');

module.exports = {reqLogger};
