const express = require('express');
const router = express.Router();
const db = require('../helpers/actionModel.js');

router.get('/', (req, res) => {
  db.get()
    .then(actions => {
      res
        .status(200)
        .json(actions);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Something went wrong...", err})
    })
});

module.exports = router;