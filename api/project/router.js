// build your `/api/projects` router here
const express = require("express");

const db = require("../../data/dbconfig.js");
const model = require('./model.js');

const router = express.Router();



router.post('/', (req, res) => {
    const projectData = req.body;
  
    Projects.add(projectData)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new project' });
      });
  });
  
  router.get('/', (req, res) => {
    Projects.find()
      .then(projects => {
        res.json(projects);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
      });
  });







































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