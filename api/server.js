// build your server here
const express = require('express');

const projectsRouter = require('./project/router.js');
const resourcesRouter = require('./resource/router.js');
const tasksRouter = require('./task/router.js');

const server = express();

server.use(express.json());


server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);


// server.get('/', (req, res) => {
//     res.status(200).json({message: 'server  up'})
// })



module.exports = server;