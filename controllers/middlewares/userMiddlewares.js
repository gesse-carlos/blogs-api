const { Users } = require('../../models');

const validateName = (req, res, next) => {
  const { displayName } = req.body;

  if (!displayName || displayName.length < 8) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
    );
  }

  next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;

  const user = await Users.findOne({ where: { email } });

  if (user) return res.status(409).json({ message: 'User already registered' });

  if (!email) return res.status(400).json({ message: '"email" is required' });

  if (!(/\S+@\S+\.\S+/.test(email))) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) return res.status(400).json({ message: '"password" is required' });

  if (password.length !== 6) {
    return res.status(400).json(
      { message: '"password" length must be 6 characters long' },
    );
  }

  next();
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};