const rescue = require('express-rescue');

const blogPostService = require('../services/blogPostService');

const add = rescue(async (req, res) => {
  const { title, content } = req.body;

  const post = await blogPostService.add(title, content, req.user);

  res.status(201).json(post);
});

module.exports = { add };