const Task = require('../models/Task');

exports.createTask = async (data) => {
    const task = await Task.create(data);
    return task;
};

exports.deleteTask = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    return task;
};

exports.getTasksByUserId = async(userId) => {
    const tasks = await Task.find({ owner: userId });
    return tasks;
};

exports.punchTask = id => Task.findByIdAndUpdate(id, { state: 1 }, { new: true });
