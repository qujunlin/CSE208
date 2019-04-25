const taskController = require('../controller/Task.controller');
const express = require('express');

const taskRouter = express.Router();

taskRouter.post('/',taskController.createTask);
taskRouter.delete('/',taskController.deleteTask);