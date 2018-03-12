const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const {requestId, log} = require('./middleware');
const router = require('./config/router');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(requestId);
app.use(log);

app.use('/v1', router);

app.get('/', (req, res) => {
  res.status(200).json({message: 'Demo Api entrypoint'});
});

module.exports = app;