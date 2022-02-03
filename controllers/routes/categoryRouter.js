const Category = require('express').Router();

const categoryController = require('../categoryController');
const { jwtMiddleware, categoryMiddlewares } = require('../middlewares');

Category.post(
  '/',
  jwtMiddleware.validateJWT,
  categoryMiddlewares.validateName,
  categoryController.add,
);

Category.get(
  '/',
  jwtMiddleware.validateJWT,
  categoryController.getAll,
);

module.exports = Category;