const { Categories } = require('../../models');
const checkCategories = require('../../utils/checkCategories');

const validateCategory = async (req, res, next) => {
  const { title, categoryIds, content } = req.body;

  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }

  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }

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

module.exports = { validateCategory };