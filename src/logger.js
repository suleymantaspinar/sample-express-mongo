const sh = require('shelljs');
const RotatingFileStream = require('bunyan-rotating-file-stream');

let logger;

module.exports = function() {
  if (!logger) {
    sh.mkdir('-p', './logs/record-service');
    logger = require('bunyan').createLogger({
      name: 'record-service',
      streams: [{
        stream: new RotatingFileStream({
          path: './logs/record-service.log',
          name: 'record-service',
          period: '1d',
          rotateExisting: true,
          threshold: '10m',
          totalSize: '50m',
        }),
        level: 'debug',
      }],
    });
  }

  return logger;
};
