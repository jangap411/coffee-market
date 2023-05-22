const express = require("express");
const router = express.Router();
const { signin } = require("../controllers/users");

router.route("/sigin").post(signin);

module.exports = router;
