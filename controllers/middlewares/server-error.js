module.exports = (err, _req, res, _next) => {
  console.error(err);
  return res.status(500).json({
    code: 'internalServerError',
    message: 'Internal server error',
  });
};