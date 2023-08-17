const express = require("express");
const { body } = require("express-validator");
const authController = require("../controller/auth");

const router = express.Router();

router.post(
  "/register",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  authController.registerUser
);

module.exports = router;
