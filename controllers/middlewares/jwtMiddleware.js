const jwt = require('../../utils/jwt');

const validateJWT = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const verifiedToken = jwt.verify(authorization);
    req.user = verifiedToken;

    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateJWT };