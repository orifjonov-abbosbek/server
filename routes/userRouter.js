/**
 * @swagger
 * tags:
 *   name: Users
 *   description: APIs related to user data
 */

const express = require("express");
const userController = require("../controller/user");

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users retrieved successfully
 *       500:
 *         description: Internal server error
 */
router.get("/users", userController.getAllUsers);

module.exports = router;
