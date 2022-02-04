const { Op } = require('sequelize');

const { BlogPosts, Users, Categories } = require('../models');

const add = async (title, content, userData) => {
  const userId = userData.id;

  const post = await BlogPosts.create({ title, content, userId });

  return {
    id: post.id,
    userId,
    title: post.title,
    content: post.content,
  };
};

const getAll = async () => {
  const posts = await BlogPosts.findAll({
    attributes: { exclude: ['UserId'] },
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

const getById = async (id) => {
  const post = await BlogPosts.findByPk(id, {
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });

  return post;
};

const update = async (id, title, content) => {
  await BlogPosts.update(
    { title, content },
    { where: { id } },
  );

  const post = await BlogPosts.findByPk(id, {
    include: {
      model: Categories, as: 'categories', through: { attributes: [] },
    },
  });

  return post;
};

const remove = async (id) => BlogPosts.destroy({ where: { id } });

// https://sequelize.org/master/manual/model-querying-basics.html#operators
const includeOptions = [
  {
    model: Users,
    as: 'user',
    attributes: ['id', 'displayName', 'email', 'image'],
  },
  {
    model: Categories,
    as: 'categories',
    attributes: ['id', 'name'],
    through: { attributes: [] },
  },
];

const search = async ({ query }) =>
  BlogPosts.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.substring]: query } },
        { content: { [Op.substring]: query } },
      ],
    },
    include: includeOptions,
  });

module.exports = { add, getAll, getById, update, remove, search };