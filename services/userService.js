const jwt = require('../utils/jwt');
const { User } = require('../models');

const add = async (displayName, email, password, image) => {
  await User.create({
    displayName,
    email,
    password,
    image,
  });

  const data = {
    displayName,
    email,
  };

  const token = jwt.sign({ data });

  return token;
};

module.exports = { add };