const Login = require('express').Router();

const loginMiddlewares = require('../middlewares/loginMiddlewares');
const loginController = require('../loginController');

Login.post(
  '/',
  loginMiddlewares.validateEmail,
  loginMiddlewares.validatePassword,
  loginMiddlewares.validateLogin,
  loginController.login,
);

module.exports = Login;