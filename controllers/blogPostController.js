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

const getById = rescue(async (req, res) => {
  const { id } = req.params;

  const post = await blogPostService.getById(id);

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  res.status(200).json(post);
});

module.exports = { add, getAll, getById };