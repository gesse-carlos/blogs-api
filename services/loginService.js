const jwt = require('../utils/jwt');

const login = async (email) => {
  const token = jwt.sign({ email });
  return token;
};

module.exports = { login };