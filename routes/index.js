const express = require('express');
const userRouter = require('./user.router');
const taskRouter = require('./task.router');
const router = express.Router();

router.use('/user', userRouter);
router.use('/task', taskRouter);

module.exports = router;
