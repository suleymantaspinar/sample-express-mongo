const moment = require("moment");

/**
 * Validate records middleware
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {callback} next 
 */
const validateRecords = function(req, res, next) {
  const {startDate, endDate, minCount, maxCount} = req.body;

  if(!startDate || !endDate || !minCount || !maxCount) {
    return res.status(400).send({
      code: 400,
      msg: 'Missing parameter.'
    });
  }

  if(!Number.isInteger(minCount)) {
    return res.status(400).send({
      code: 400,
      msg: 'Minimum count should be a number.'
    });
  }

  if(!Number.isInteger(maxCount)) {
    return res.status(400).send({
      code: 400,
      msg: 'Maximum count should be a number.'
    });
  }

  if(!moment(startDate, "YYYY-MM-DD", true).isValid()) {
    return res.status(400).send({
      code: 400,
      msg: 'Invalid start date.'
    });
  } 

  if(!moment(endDate, "YYYY-MM-DD", true).isValid()) {
    return res.status(400).send({
      code: 400,
      msg: 'Invalid end date.'
    });
  }

  if(moment(startDate).unix() > moment(endDate).unix()) {
    return res.status(400).send({
      code: 400,
      msg: 'Start date can not greater than end date.'
    });
  }

  if(minCount > maxCount) {
    return res.status(400).send({
      code: 400,
      msg: 'Minimum count cant be greater than maximum count'
    });
  }
  console.log("00000")
  next();
};

module.exports = {validateRecords};
