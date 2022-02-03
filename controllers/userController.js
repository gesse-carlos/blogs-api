const rescue = require('express-rescue');

const userService = require('../services/userService');

const add = rescue(async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await userService.add(displayName, email, password, image);

  res.status(201).json(user);
});

const getAll = rescue(async (req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
});

module.exports = { add, getAll };