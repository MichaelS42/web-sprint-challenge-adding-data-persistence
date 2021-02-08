// build your `/api/resources` router here
const express = require("express");

const db = require("../../data/dbconfig.js");
const model = require('./model.js');

const router = express.Router();


router.post('/', (req, res) => {
  const resourceData = req.body;

  Resources.add(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
});

router.get('/', (req, res) => {
  Resources.find()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
});







































// server.post('/api/resources', (req, res) => {
//     db('resources').insert(req.body)
//       .then(ids => {
//         const id = ids[0];
  
//         db('resources')
//           .where({ id })
//           .first()
//           .then(resource => {
//             res.status(201).json(resource);
//           });
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   });


// router.get("/", (req, res) => {
//     db("resources")
//       .then(resources => {
//         res.json(resources);
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   });