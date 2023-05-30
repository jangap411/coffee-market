const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Verify authentication header function
 * Usage: wrap each endpoint and checks for auth header
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Object} next - Next middleware function
 * @throws - Error if token is not valid
 * @returns - A JSON order object
 */
const verifyToken = (req, res, next) => {
  // extract token from request headers
  const authHeader = req.headers.token;

  // if auth header is valid
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    // verify jwt token
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) res.status(403).json("Invalid token");
      req.user = user;
      next(); //call next middleware function
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
};

/**
 *
 * Verify token authorization  function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Object} next - Next middleware function
 * @throws - Error if user is not authenticated
 * @returns - A JSON order object
 */
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to access this");
    }
  });
};

/**
 * Verify if the user is an
 * Usage: wrap each endpoint and checks for auth header
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Object} next - Next middleware function
 * @throws - Error if user is not authenticated
 * @returns - Boolean to call next function
 */
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    // check if user is admin
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to that");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
