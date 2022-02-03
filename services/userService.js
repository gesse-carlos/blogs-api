const jwt = require('../utils/jwt');
const { Users } = require('../models');

const add = async (displayName, email, password, image) => {
  await Users.create({
    displayName,
    email,
    password,
    image,
  });

  const token = jwt.sign({ displayName });

  return token;
};

const getAll = async () => {
  const users = await Users.findAll();
  return users;
};

module.exports = { add, getAll };