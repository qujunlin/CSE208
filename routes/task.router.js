const { taskController } = require('../controllers');
const express = require('express');

const taskRouter = express.Router();

taskRouter.post('/',taskController.createTask);
taskRouter.delete('/:id',taskController.deleteTask);
taskRouter.get('/:userId', taskController.getTasksByUserId);
taskRouter.put('/:id', taskController.punchTask);

module.exports = taskRouter;