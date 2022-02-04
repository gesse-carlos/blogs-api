module.exports = (categoryIds, categories) => {
  const categoriesInDb = categories.map(({ id }) => id);

  return categoryIds.every((category) => categoriesInDb.includes(category));
};