// build your `/api/projects` router here
const express = require("express");
const Model = require('./model.js');

const router = express.Router();


router.get("/", (req, res) => {
  Model.get()
  .then((projects) => res.status(200).send(projects))
  .catch((err) => {
    res.status(500).json({ message: "failed to get projects"})
  })
});

router.post('/', (req, res) => {
    const projectData = req.body;
  
    Model.add(projectData)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new project' });
      });
  });
  
//   router.get('/', (req, res) => {
//     Model.get(req.id)
//       .then(projects => {
//         res.status(200).json(projects);
//       })
//       .catch(err => {
//         res.status(500).json({ message: 'Failed to get projects' });
//       });
//   });

  module.exports = router;







































// server.post('/api/projects', (req, res) => {
//     db('projects').insert(req.body)
//       .then(ids => {
//         const id = ids[0];
  
//         db('projects')
//           .where({ id })
//           .first()
//           .then(project => {
//             res.status(201).json(project);
//           });
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   });

//   router.get("/", (req, res) => {
//     db("projects")
//       .then(projects => {
//         res.json(projects);
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   });