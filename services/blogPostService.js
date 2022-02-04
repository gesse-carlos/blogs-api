const { BlogPosts } = require('../models');

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

module.exports = { add };