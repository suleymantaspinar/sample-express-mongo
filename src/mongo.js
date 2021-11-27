require('dotenv').config();
const logger = require('./logger')();
const {MongoClient} = require('mongodb');

let mongoClient;
let db;

/**
 * Connect database
 */
const connect = async function(URI = process.env.MONGO_URI, dbName = "getir-case-study") {
  if (!mongoClient) {
    mongoClient = new MongoClient(URI);
  }
  try {
    mongoClient = await mongoClient.connect();

    logger.info('Mongo is connected!');

    db = mongoClient.db(dbName);
    return mongoClient;
  } catch (error) {
    logger.info({
      error,
      msg: 'Error occured while connecting mongo'
    });
    throw new Error(error);
  }
};

/**
 * Fetch filtered records from database
 * 
 * @param {String} start 
 * @param {String} end 
 * @param {Number} min 
 * @param {Number} max 
 * 
 * @returns {Promise}
 */
const getFilteredRecords = async function(start, end, min, max) {
  try {
    let collection = await db.collection("records")
      .aggregate([
        {
          $match: { 
            createdAt: {
              $gte: new Date(start),
              $lte: new Date(end)
            }
          },
        },
        {
          $project: {
            _id: 0,
            key: 1,
            createdAt: 1,
            totalCount: { $sum: "$counts" },
          },
        },
        {
          $match: { 
            totalCount: {
              $gte: min * 1,
              $lte: max * 1
            }
          },
        }
      ])
      .toArray();
    return collection;
  } catch (error) {
    logger.info({
      error,
      msg: "Error occured while fetching records from database"
    });
    throw new Error(error);
  }
};

module.exports = { connect, getFilteredRecords};
