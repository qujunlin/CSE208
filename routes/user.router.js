const { userController } = require('../controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.post('/', userController.createUser);
userRouter.get('/:nickName/:passWord', userController.authUser);

module.exports = userRouter;
