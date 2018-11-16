const express = require('express');
const router = express.Router();
const db = require('../helpers/actionModel.js');
const projectDb = require('../helpers/projectModel.js');

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

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.get(id)
    .then(action => {
      res
        .status(200)
        .json(action);
    })
    .catch(err => {
      res 
        .status(500)
        .json({ error: "Problem getting that action..." })
    })
});

router.post('/', (req, res) => {
  const action = req.body;
  const projId = action.project_id;
  const associateProject = projectDb.get(projId);
  if (!associateProject) {
    res
      .status(404)
      .json({ message: "The project ID associated with this action does not exist..." })
  } 
  else if ((action.description.length > 128 || action.description.length === 0) || typeOf(action.description) !== 'string') {
    res 
      .status(406)
      .json({ message: "Please make sure the action description is less than 128 characters, \nand greater than zero characters" })
  }
  else if (action.notes.length === 0 || typeOf(action.notes) !== 'string') {
    res
      .status(406)
      .json({ message: "Please make sure the length of the 'notes' section is greater than zero characters"})
  }

})

module.exports = router;