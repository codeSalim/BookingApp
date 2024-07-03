const express = require("express");
const router = express.Router();
const usercontroll = require("../controller/userController");

router.post("/signup", usercontroll.signup);
router.post("/login",usercontroll.login)
module.exports = router;
