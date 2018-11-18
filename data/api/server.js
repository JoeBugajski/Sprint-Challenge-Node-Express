const cors = require('cors');
const express = require('express');
const configMiddleware = require('../middleware/middleware');
const start = express();

start.use(cors());
start.options('*', cors());

configMiddleware(start);

start.get('/', (req, res) => {
  res
    .status(200)
    .json({ api: 'Server is up and running!' })
});

module.exports = start;