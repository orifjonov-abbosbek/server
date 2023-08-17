// routes/userRouter.js
const express = require("express");
const userController = require("../controller/user");

const router = express.Router();

router.get("/users", userController.getAllUsers);

module.exports = router;
