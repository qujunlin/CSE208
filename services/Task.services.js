const { Task } = require('../models/Task');

exports.createTask = async (data) => {
    const task = await Task.createTask(data);
    return task;
};

exports.deleteTask = async (data) => {
    const task = await Task.deleteTask(data);
    return task;
};

