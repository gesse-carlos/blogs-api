const rescue = require('express-rescue');

const loginService = require('../services/loginService');

const login = rescue(async (req, res) => {
  const { email } = req.body;

  const token = await loginService.login(email);

  return res.status(200).json({ token });
});

module.exports = { login };