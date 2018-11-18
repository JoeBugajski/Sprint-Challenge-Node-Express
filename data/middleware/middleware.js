const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const actionRouter = require('../middleware/actionRouter');
const projectRouter = require('../middleware/projectRouter');
cors({
  credentials: true,
  origin: true
})

module.exports = start => {
  start.use(cors());
  start.options('*', cors());
  start.use(express.json());
  start.use(morgan('dev'));
  start.use(helmet());
  start.use('/api/actions', actionRouter);
  start.use('/api/projects', projectRouter);
  
}