const rescue = require('express-rescue');

const categoryService = require('../services/categoryService');

const add = rescue(async (req, res) => {
  const { name } = req.body;

  const category = await categoryService.add(name);

  res.status(201).json(category);
});

const getAll = rescue(async (req, res) => {
  const categories = await categoryService.getAll();

  res.status(200).json(categories);
});

module.exports = { add, getAll };