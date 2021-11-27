const express = require('express');
const router = express.Router();
const logger = require('../logger')();
const RecordService = require('../services/record.service');

const { validateRecords } = require('../middleware/validate-records');

router.use("/", validateRecords);

router.post('/', async (req, res, next) => {
  try {
    logger.info('Incoming request body', req.body);
    const records = await RecordService.getRecords(req.body);
    res.status(200).json({
      code: 0,
      msg: "Success",
      records
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;