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

module.exports = { add, getAll, getById };