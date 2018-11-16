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

router.post('/', (req, res) => {
  const project = req.body;
  if(project.name && project.description !== "") {
    db.insert(project)
      .then(project => {
        res
          .status(201)
          .json({project})
    }) 
      .catch(error =>  {
        console.log(error);
      res
        .status(500)
        .json({ error: "There was a problem saving project to database..." })
    })
  } else {
    res
      .status(400)
      .json({ errorMessage: "Please provide project name and contents." })
  }
})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  if(changes.name && changes.description === "") {
    res
      .status(406)
      .json({ errorMessage: "Name and description must not be blank!"})
  } 
  else {
    db.update(id, changes)
      .then(count => {
        if (count) {
          res
            .status(200)
            .json({ message: "Project updated"})
        } else {
          res
            .status(404)
            .json({ message: "Can't update a project that doesn't exist..."})
        }
      })
      .catch(error => {
        res
          .status(500)
          .json({ error: "Error updating project..."})
      })
  }
})

module.exports = router;