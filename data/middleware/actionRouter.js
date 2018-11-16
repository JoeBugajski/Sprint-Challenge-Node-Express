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

router.post('/', async (req, res) => {
  const action = req.body;
  const projId = action.project_id;
  if ((action.description.length > 128 || action.description.length === 0) || typeof(action.description) !== 'string') {
    res 
      .status(406)
      .json({ message: `Please make sure the action description is less than 128 characters, \nand greater than zero characters` })
  }
  else if (action.notes.length === 0 || typeof(action.notes) !== 'string') {
    res
      .status(406)
      .json({ message: "Please make sure the length of the 'notes' section is greater than zero characters"})
  } else try {
      const associateProject = await projectDb.get(projId);
      if (associateProject) {
        db.insert(action)
          .then(action => {
            res 
              .status(201)
              .json({action})
          })
            .catch(error => {
              res 
                .status(500)
                .json({ error: "There was a problem saving the action to the database..."})
            })
        } 
    } catch (error) {
      res 
        .status(404)
        .json({ errorMessage: "That action isn't associated with a valid project_id number..." })
    }
})

module.exports = router;