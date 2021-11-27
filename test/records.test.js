const app = require("../src/app");
const request = require("supertest");

const { expect } = require("@jest/globals");

jest.mock("../src/mongo");

describe('Records', () => {
  it('should retrieve the records in the same year', (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2015-01-01",
        endDate: "2015-12-12",
        minCount: 1,
        maxCount: 1000000
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(err).toBeNull();
        expect(res.body.msg).toEqual("Success");
        expect(res.body.code).toEqual(0);
        expect(res.body.records).toHaveLength(2);
        expect(res.body.records).toIncludeAllPartialMembers([
          { key: 'dude' },
          { key: 'dude2' },
        ]);
        done();
      });
  });

  it('should retrieve the records in the 2015, 2016 years', (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2015-01-01",
        endDate: "2016-12-12",
        minCount: 1,
        maxCount: 1000000
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(err).toBeNull();
        expect(res.body.msg).toEqual("Success");
        expect(res.body.code).toEqual(0);
        expect(res.body.records).toHaveLength(4);
        expect(res.body.records).toIncludeAllPartialMembers([
          {key: 'dude'},
          {key: 'dude2'},
          {key: 'dude3'},
          {key: 'dude4'},
        ]);
        done();
      });
  });

  it('should retrieve the records in the same month', (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2017-01-01",
        endDate: "2017-01-30",
        minCount: 1,
        maxCount: 1000000
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(err).toBeNull();
        expect(res.body.msg).toEqual("Success");
        expect(res.body.code).toEqual(0);
        expect(res.body.records).toHaveLength(2);
        expect(res.body.records).toIncludeAllPartialMembers([
          {key: 'dude5'},
          {key: 'dude6'},
        ]);
        done();
      });
  });

  it('should retrieve the records with total counts less than 100', (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2000-01-01",
        endDate: "2099-01-30",
        minCount: 1,
        maxCount: 100
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(err).toBeNull();
        expect(res.body.msg).toEqual("Success");
        expect(res.body.code).toEqual(0);
        expect(res.body.records).toHaveLength(3);
        expect(res.body.records).toIncludeAllPartialMembers([
          {key: 'dude'},
          {key: 'dude5'},
          {key: 'dude6'},
        ]);
        done();
      });
  });

  it('should retrieve the records with total counts greater than 100', (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2000-01-01",
        endDate: "2099-01-30",
        minCount: 100,
        maxCount: 1000000
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(err).toBeNull();
        expect(res.body.msg).toEqual("Success");
        expect(res.body.code).toEqual(0);
        expect(res.body.records).toHaveLength(3);
        expect(res.body.records).toIncludeAllPartialMembers([
          {key: 'dude2'},
          {key: 'dude3'},
          {key: 'dude4'},
        ]);
        done();
      });
  });

  it('should retrieve the records with same year total counts less than 100', (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2015-01-01",
        endDate: "2015-12-12",
        minCount: 1,
        maxCount: 100
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(err).toBeNull();
        expect(res.body.msg).toEqual("Success");
        expect(res.body.code).toEqual(0);
        expect(res.body.records).toHaveLength(1);
        expect(res.body.records).toIncludeAllPartialMembers([
          {key: 'dude'},
        ]);
        done();
      });
  });

  it('should retrieve the records with same year total counts greater than 100', (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2015-01-01",
        endDate: "2015-12-12",
        minCount: 100,
        maxCount: 1000000
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(err).toBeNull();
        expect(res.body.msg).toEqual("Success");
        expect(res.body.code).toEqual(0);
        expect(res.body.records).toHaveLength(1);
        expect(res.body.records).toIncludeAllPartialMembers([
          {key: 'dude2'},
        ]);
        done();
      });
  });

   it('should retrieve the records with year 2015,2016 total counts less than 100', (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2015-01-01",
        endDate: "2016-12-12",
        minCount: 1,
        maxCount: 100
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(err).toBeNull();
        expect(res.body.msg).toEqual("Success");
        expect(res.body.code).toEqual(0);
        expect(res.body.records).toHaveLength(1);
        expect(res.body.records).toIncludeAllPartialMembers([
          {key: 'dude'},
        ]);
        done();
      });
  });

  it('should retrieve the records with year 2015,2016 total counts greater than 100', (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2015-01-01",
        endDate: "2016-12-12",
        minCount: 100,
        maxCount: 100000
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(err).toBeNull();
        expect(res.body.msg).toEqual("Success");
        expect(res.body.code).toEqual(0);
        expect(res.body.records).toHaveLength(3);
        expect(res.body.records).toIncludeAllPartialMembers([
          {key: 'dude2'},
          {key: 'dude3'},
          {key: 'dude4'},
        ]);
        done();
      });
  });
});