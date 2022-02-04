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

const getById = async (id) => {
  const user = await Users.findByPk(id);

  return user;
};

const getByEmail = async (email) => {
  const user = await Users.findAll({ where: { email } });

  return user[0].dataValues;
};

module.exports = { add, getAll, getById, getByEmail };