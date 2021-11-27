// const mongo = jest.createMockFromModule('./mongo');
// const moment = require("moment");

let mockRecords = [
  {
    key: "dude",
    createdAt: new Date("2015-06-06"),
    counts: [10, 20, 30]
  },
  {
    key: "dude2",
    createdAt: new Date("2015-12-12"),
    counts: [100, 200, 300]
  },
  {
    key: "dude3",
    createdAt: new Date("2016-01-01"),
    counts: [100, 50, 10]
  },
  {
    key: "dude4",
    createdAt:  new Date("2016-05-12"),
    counts: [1000, 2000, 3000]
  },
  {
    key: "dude5",
    createdAt: new Date("2017-01-01"),
    counts: [10, 20, 30]
  },
  {
    key: "dude6",
    createdAt: new Date("2017-01-02"),
    counts: [10, 20, 30]
  },  
];


const getFilteredRecords = (start, end, min, max) => {
  return mockRecords.filter(record => {
    let totalCounts = record.counts.reduce((p,c) => p + c);
    return new Date(start) <= record.createdAt &&
      new Date(end) >= record.createdAt &&
      min <= totalCounts && max >= totalCounts;
  });
};

module.exports = {
  getFilteredRecords
};