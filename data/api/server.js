const express = require('express');

const start = express();

start.get('/', (req, res) => {
  res
    .status(200)
    .json({ api: 'Server is up and running!' })
});

module.exports = start;