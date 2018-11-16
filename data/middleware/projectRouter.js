const express = require('express');
const router = express.Router();
const db = require('../helpers/projectModel.js');

router.get('/', (req, res) => {
  db.get()
    .then(projects => {
      res
        .status(200)
        .json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Something went wrong...", err})
    })
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.get(id)
    .then(project => {
      res
        .status(200)
        .json(project);
    })
    .catch(err => {
      res 
        .status(500)
        .json({ error: "Problem getting that project..." })
    })
});

module.exports = router;