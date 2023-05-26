/**
 * Verify authentication header function
 * Usage: wrap each endpoint and checks for auth header
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Object} next - Next middleware function
 * @returns - A JSON order object
 */
const verifyAuth = (req, res, next) => {
  const authBearer = req.headers["Authorization"];

  // if request header does not contain
  if (typeof authBearer !== "undefined") {
    const bearer = authBearer.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    return res
      .status(403)
      .json({ status: "error", message: "Access Forbidden" });
  }
};

module.exports = verifyAuth;
