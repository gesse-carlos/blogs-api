const BlogPost = require('express').Router();

const blogPostController = require('../blogPostController');
const { blogPostMiddlewares, jwtMiddleware } = require('../middlewares');

BlogPost.post(
  '/',
  jwtMiddleware.validateJWT,
  blogPostMiddlewares.validateCategory,
  blogPostController.add,
);

BlogPost.get(
  '/',
  jwtMiddleware.validateJWT,
  blogPostController.getAll,
);

module.exports = BlogPost;