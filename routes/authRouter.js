const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");

// Register a new user
router.post("/register", authController.register);

// Login user
router.post("/login", authController.login);

module.exports = router;