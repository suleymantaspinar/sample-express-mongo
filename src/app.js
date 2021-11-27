
const app = require('express')();
const mw = require('./middleware');

const db = require("./mongo");

app.use(mw.reqLogger);
app.use(mw.cors());
app.use(mw.bodyParser());
app.use('/api/records', require('./router/records.router'));
app.use(mw.handleErrors);
app.use(mw.notFound);

module.exports = app;