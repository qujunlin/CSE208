const express = require('express');
const userRouter = require('./user.router');
const taskRouter = require('./Task.router');
const router = express.Router();

router.use('/user', userRouter);
router.use('/task', taskRouter);

module.exports = router;
