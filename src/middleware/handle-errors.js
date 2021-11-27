const logger = require("../logger")();

const handleErrors = (err, req, res, next)  => {
  logger.info({
    err,
    msg: "Server error."
  });

  res.status(err.code || 500).send({
    code: err.code || 500,
    error: "Server error." 
  });
};

module.exports = {handleErrors};