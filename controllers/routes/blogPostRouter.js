const BlogPost = require('express').Router();

const blogPostController = require('../blogPostController');
const { blogPostMiddlewares, jwtMiddleware } = require('../middlewares');

BlogPost.post(
  '/',
  jwtMiddleware.validateJWT,
  blogPostMiddlewares.validateCategory,
  blogPostController.add,
);

module.exports = BlogPost;