// build your `/api/tasks` router here
const express = require("express");

const db = require("../../data/dbConfig.js");
const model = require('./model.js');

const router = express.Router();



router.post('/', (req, res) => {
    const taskData = req.body;
  
    Tasks.add(taskData)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new task' });
      });
  });
  
  router.get('/', (req, res) => {
    Tasks.find()
      .then(tasks => {
        res.json(tasks);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get tasks' });
      });
  });


  module.exports = router;





































// server.post('/api/tasks', (req, res) => {
//     db('tasks').insert(req.body)
//       .then(ids => {
//         const id = ids[0];
  
//         db('tasks')
//           .where({ id })
//           .first()
//           .then(task => {
//             res.status(201).json(task);
//           });
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   });


//   server.get('/api/tasks', (req, res) => {
    
//     db('tasks as a')
//       .leftJoin('projects as p', 'p.id', 'a.projects_id')
//       .select('a.id', 'a.task_description', 'p.projects_name')
//       .then(tasks => {
//         res.status(200).json(tasks);
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   });