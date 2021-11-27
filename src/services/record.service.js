const logger = require("../logger")();
const {getFilteredRecords} = require("../mongo");

/**
 * Get records
 *
 * @param {Object} body
 *
 * @return {records}
 */
const getRecords = async function(body) {
  const { startDate, endDate, minCount, maxCount } = body;

  try {
    const records = await getFilteredRecords(startDate, endDate, minCount, maxCount);
    return records;
  } catch (error) {
    logger.info({
      error,
      msg: "Error occured while fetching records"
    });
    return [];
  }
};

module.exports = {getRecords};
