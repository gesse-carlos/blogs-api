const rescue = require('express-rescue');

const blogPostService = require('../services/blogPostService');

const add = rescue(async (req, res) => {
  const { title, content } = req.body;

  const post = await blogPostService.add(title, content, req.user);

  res.status(201).json(post);
});

const getAll = rescue(async (req, res) => {
  const posts = await blogPostService.getAll();

  res.status(200).json(posts);
});

module.exports = { add, getAll };