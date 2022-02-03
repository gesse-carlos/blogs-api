const rescue = require('express-rescue');

const userService = require('../services/userService');

const add = rescue(async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await userService.add(displayName, email, password, image);

  res.status(201).json(user);
});

const getAll = rescue(async (req, res) => {
  const users = await userService.getAll();
  res.status(200).json(users);
});

const getById = rescue(async (req, res) => {
  const user = await userService.getById(req.params.id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  res.status(200).json(user);
});

module.exports = { add, getAll, getById };