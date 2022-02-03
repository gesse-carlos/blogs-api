const Login = require('express').Router();

const { loginMiddlewares } = require('../middlewares');
const loginController = require('../loginController');

Login.post(
  '/',
  loginMiddlewares.validateEmail,
  loginMiddlewares.validatePassword,
  loginMiddlewares.validateLogin,
  loginController.login,
);

module.exports = Login;