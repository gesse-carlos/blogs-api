const rescue = require('express-rescue');

const categoryService = require('../services/categoryService');

const add = rescue(async (req, res) => {
  const { name } = req.body;

  const category = await categoryService.add(name);

  res.status(201).json(category);
});

module.exports = { add };