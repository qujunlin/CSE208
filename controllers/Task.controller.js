const { taskServices } = require('../services');

exports.createTask = async (req, res) => {
    try{
        const data = req.body;
        console.log(data);
        const task = await taskServices.createTask(data);
        res.json({ task });
    } catch (e) {
        res.status(400).json({ message: e });
    }
};

exports.deleteTask = async (req, res) => {
    try{
        const { id } = req.params;
        const task = await taskServices.deleteTask(id);
        res.json({ task });
    } catch (e) {
        res.status(400).json({ message: e });
    }
};

exports.getTasksByUserId = async (req, res) => {
    try{
        const { userId } = req.params;
        const task = await taskServices.getTasksByUserId(userId);
        return res.json({ task });
    } catch (e) {
        res.status(400).json({ message: e })
    }
};

exports.punchTask = async (req, res) => {
    try{
        const { id } = req.params;
        const task = await taskServices.punchTask(id);
        return res.json({ task });
    } catch (e) {
        res.status(400).json({ message: e });
    }
};