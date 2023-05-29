const express = require("express");
const router = express.Router();
const {
  getUser,
  getAllUsers,
  updateUser,
  destroyUser,
  getUsersStats,
} = require("../controllers/users");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

router.route("/users").get(verifyTokenAndAdmin, getAllUsers);
router.route("/users/find/:id").get(verifyTokenAndAdmin, getUser);
router
  .route("/users/:id")
  .get(verifyTokenAndAuthorization, updateUser)
  .delete(verifyTokenAndAuthorization, destroyUser);
router.route("/users/stats").get(verifyTokenAndAdmin, getUsersStats);

module.exports = router;
