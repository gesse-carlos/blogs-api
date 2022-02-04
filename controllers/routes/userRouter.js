const User = require('express').Router();

const { userMiddlewares, jwtMiddleware } = require('../middlewares');
const userController = require('../userController');

User.post(
  '/',
  userMiddlewares.validateName,
  userMiddlewares.validateEmail,
  userMiddlewares.validatePassword,
  userController.add,
);

User.get(
  '/',
  jwtMiddleware.validateJWT,
  userController.getAll,
);

User.get(
  '/:id',
  jwtMiddleware.validateJWT,
  userController.getById,
);

User.delete(
  '/me',
  jwtMiddleware.validateJWT,
  userController.remove,
);

module.exports = User;