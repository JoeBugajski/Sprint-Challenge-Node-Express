const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const actionRouter = require('../middleware/actionRouter');
const projectRouter = require('../middleware/projectRouter');

module.exports = start => {
  start.use(express.json());
  start.use(morgan('dev'));
  start.use(helmet());
  start.use('/api/actions', actionRouter);
  start.use('/api/projects', projectRouter);

}