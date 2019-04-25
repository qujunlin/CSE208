const { taskService } = require('../services/Task.services');

exports.createTask = async (req, res) => {
    try{
        const { data } = req.body;
        const task = await taskService.createTask(data);
        res.json({ task });
    } catch (e) {
        res.status(400).json({ message: e });
    }
};

exports.deleteTask = async (req, res) => {
    try{
        const { content } = req.body;
        const task = await taskService.deleteTask(data);
        res.json({ task});
    }catch (e) {
        res.status(400).json({ message: e});
    }
}