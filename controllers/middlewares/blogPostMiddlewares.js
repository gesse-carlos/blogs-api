const { Categories, BlogPosts } = require('../../models');
const checkCategories = require('../../utils/checkCategories');

const validateTitleContent = async (req, res, next) => {
  const { title, content } = req.body;

  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }

  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }

  next();
};

const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }

  const categories = await Categories.findAll();
  const verifyCategories = checkCategories(categoryIds, categories);

  if (!verifyCategories) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
};

const validateUpdate = async (req, res, next) => {
  if (req.body.categoryIds) {
    return res.status(400).json({ message: 'Categories cannot be edited' });
  }

  const { id } = req.params;

  const post = await BlogPosts.findByPk(id);

  if (post.userId !== req.user.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  next();
};

const validateDelete = async (req, res, next) => {
  const { id } = req.params;

  const post = await BlogPosts.findByPk(id);

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  next();
};

module.exports = { validateTitleContent, validateCategory, validateUpdate, validateDelete };