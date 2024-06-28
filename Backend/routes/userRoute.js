const express = require("express");
const router = express.Router();
const usercontroll = require("../controller/userController");

router.post("/signup", usercontroll.signup);

module.exports = router;
