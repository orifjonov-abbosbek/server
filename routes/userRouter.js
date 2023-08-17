const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware.authenticate);

router.get("/users", userController.getUsers);

router.put("/block/:id", userController.blockUsers);

router.put("/unblock/:id", userController.unblockUsers);

router.delete("/delete/:id", userController.deleteUsers);

module.exports = router;
