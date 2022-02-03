const User = require('express').Router();

const userMiddlewares = require('../middlewares/userMiddlewares');
const userController = require('../userController');

User.post(
  '/',
  userMiddlewares.validateName,
  userMiddlewares.validateEmail,
  userMiddlewares.validatePassword,
  userController.add,
);

module.exports = User;