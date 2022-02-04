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

const update = rescue(async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const post = await blogPostService.update(id, title, content);

  res.status(200).json(post);
});

const remove = rescue(async (req, res) => {
  const { id } = req.params;
  const post = await blogPostService.getById(id);

  if (post.userId !== req.user.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  await blogPostService.remove(id);

  res.status(204).end();
});

const search = rescue(async (req, res) => {
  console.log(req.query);
  const { q } = req.query;
  console.log(q);

  const posts = await blogPostService.search({ query: q });
  console.log(posts);

  res.status(200).json(posts);
});

module.exports = { add, getAll, getById, update, remove, search };