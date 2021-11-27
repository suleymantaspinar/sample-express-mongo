const app = require("../src/app");
const request = require("supertest");

const { expect } = require("@jest/globals");
jest.mock("../src/mongo");

describe('Validate records middleware', () => {

  it('should give error the when startDate parameter is missing', (done) => {
    request(app)
      .post("/api/records")
      .send({
        endDate: "2015-12-12",
        minCount: 1,
        maxCount: 1000000
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Missing parameter.");
        expect(res.body.code).toEqual(400);
        done();
      });
  });

  it('should give error the when endDate parameter is missing', (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2015-12-12",
        minCount: 1,
        maxCount: 1000000
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Missing parameter.");
        expect(res.body.code).toEqual(400);
        done();
      });
  });

  it('should give error the when minCount parameter is missing', (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2015-12-12",
        endDate: "2015-12-12",
        maxCount: 1000000
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Missing parameter.");
        expect(res.body.code).toEqual(400);
        done();
      });
  });

  it('should give error the when maxCount parameter is missing', (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2015-12-12",
        endDate: "2015-12-12",
        minCount: 1000000
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Missing parameter.");
        expect(res.body.code).toEqual(400);
        done();
      });
  });

  it('should give error the when minCount and maxCount parameters are missing', (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2015-12-12",
        endDate: "2015-12-12",
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Missing parameter.");
        expect(res.body.code).toEqual(400);
        done();
      });
  });

  it('should give error the when maxcount and endDate parameters are missing', (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2015-12-12",
        minCount: 100000,
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Missing parameter.");
        expect(res.body.code).toEqual(400);
        done();
      });
  });
  
  it('should give error the when minCount and endDate parameters are missing', (done) => {
    request(app)
      .post("/api/records")
      .send({
        startDate: "2015-12-12",
        maxCount: 100000,
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Missing parameter.");
        expect(res.body.code).toEqual(400);
        done();
      });
  });

  it('should give error the when startDate and minCount parameters are missing', (done) => {
    request(app)
    .post("/api/records")
    .send({
      endDate: "2015-12-12",
      maxCount: 1000000,
    })
    .expect('Content-Type', /json/)
    .expect(400)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.msg).toEqual("Missing parameter.");
      expect(res.body.code).toEqual(400);
      done();
    });
  });
  
  it('should give error the when startDate and maxCount parameters are missing', (done) => {
    request(app)
    .post("/api/records")
    .send({
      endDate: "2015-12-12",
      minCount: 1000000,
    })
    .expect('Content-Type', /json/)
    .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Missing parameter.");
        expect(res.body.code).toEqual(400);
        done();
      });
    });
    
    it('should give error the when endDate,minCount,maxCount parameters are missing', (done) => {
      request(app)
      .post("/api/records")
      .send({
        startDate: "2015-12-12",
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Missing parameter.");
        expect(res.body.code).toEqual(400);
        done();
      });
    });

    it('should give error the when startDate,minCount,maxCount parameters are missing', (done) => {
      request(app)
      .post("/api/records")
      .send({
        endDate: "2015-12-12",
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Missing parameter.");
        expect(res.body.code).toEqual(400);
        done();
      });
    });


    it('should give error the when startDate,endDate,maxCount parameters are missing', (done) => {
      request(app)
      .post("/api/records")
      .send({
        minCount: 123456,
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Missing parameter.");
        expect(res.body.code).toEqual(400);
        done();
      });
    });

    it('should give error the when startDate,endDate,minCount parameters are missing', (done) => {
      request(app)
      .post("/api/records")
      .send({
        maxCount: 123456,
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Missing parameter.");
        expect(res.body.code).toEqual(400);
        done();
      });
    });

    it('should give error the when minCount is not a valid number', (done) => {
      request(app)
      .post("/api/records")
      .send({
        startDate: "2015-12-12",
        endDate: "2015-12-12",
        minCount: "as",
        maxCount: 1234
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Minimum count should be a number.");
        expect(res.body.code).toEqual(400);
        done();
      });
    });

    it('should give error the when maxCount is not a valid number', (done) => {
      request(app)
      .post("/api/records")
      .send({
        startDate: "2015-12-12",
        endDate: "2015-12-12",
        minCount: 1234,
        maxCount: "asdas"
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Maximum count should be a number.");
        expect(res.body.code).toEqual(400);
        done();
      });
    });

    it('should give error the when startDate format is MM-DD-YYYY', (done) => {
      request(app)
      .post("/api/records")
      .send({
        startDate: "12-12-2012",
        endDate: "2015-12-12",
        minCount: 1234,
        maxCount: 12345
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Invalid start date.");
        expect(res.body.code).toEqual(400);
        done();
      });
    });   

    it('should give error the when startDate format is DD-YYYY-MM', (done) => {
      request(app)
      .post("/api/records")
      .send({
        startDate: "12-2012-12",
        endDate: "2015-12-12",
        minCount: 1234,
        maxCount: 12345
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Invalid start date.");
        expect(res.body.code).toEqual(400);
        done();
      });
    }); 

    it('should give error the when startDate format is MM-YYYY-DD', (done) => {
      request(app)
      .post("/api/records")
      .send({
        startDate: "12-2012-12",
        endDate: "2015-12-12",
        minCount: 1234,
        maxCount: 12345
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Invalid start date.");
        expect(res.body.code).toEqual(400);
        done();
      });
    });

    it('should give error the when startDate format is MM-DD-YYYY', (done) => {
      request(app)
      .post("/api/records")
      .send({
        startDate: "2015-12-12",
        endDate: "12-12-2012",
        minCount: 1234,
        maxCount: 12345
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Invalid end date.");
        expect(res.body.code).toEqual(400);
        done();
      });
    });

    it('should give error the when startDate format is not DD-YYYY-MM', (done) => {
      request(app)
      .post("/api/records")
      .send({
        startDate: "2015-12-12",
        endDate: "12-2012-12",
        minCount: 1234,
        maxCount: 12345
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Invalid end date.");
        expect(res.body.code).toEqual(400);
        done();
      });
    }); 

    it('should give error the when startDate format is not MM-YYYY-DD', (done) => {
      request(app)
      .post("/api/records")
      .send({
        startDate: "2015-12-12",
        endDate: "12-2012-12",
        minCount: 1234,
        maxCount: 12345
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Invalid end date.");
        expect(res.body.code).toEqual(400);
        done();
      });
    }); 

    it('should give error the when startDate is greater than endDate', (done) => {
      request(app)
      .post("/api/records")
      .send({
        startDate: "2015-12-12",
        endDate: "2012-12-12",
        minCount: 1234,
        maxCount: 12345
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Start date can not greater than end date.");
        expect(res.body.code).toEqual(400);
        done();
      });
    }); 

    it('should give error the when minimum count is greater than maximum count', (done) => {
      request(app)
      .post("/api/records")
      .send({
        startDate: "2011-12-12",
        endDate: "2012-12-12",
        minCount: 1234512345,
        maxCount: 12345
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual("Minimum count cant be greater than maximum count");
        expect(res.body.code).toEqual(400);
        done();
      });
    }); 
    
});