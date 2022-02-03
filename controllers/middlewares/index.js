const domainError = require('./domain-error');
const serverError = require('./server-error');
const jwtMiddleware = require('./jwtMiddleware');
const loginMiddlewares = require('./loginMiddlewares');
const userMiddlewares = require('./userMiddlewares');
const categoryMiddlewares = require('./categoryMiddlewares');

module.exports = {
  domainError,
  serverError,
  jwtMiddleware,
  loginMiddlewares,
  userMiddlewares,
  categoryMiddlewares,
};