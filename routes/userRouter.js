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

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to be deleted
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: User deleted successfully
 *       500:
 *         description: Internal server error
 */
router.delete("/users/:id", userController.deleteUser);

/**
 * @swagger
 * /api/user/block/{email}:
 *   patch:
 *     summary: Block a user by email
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: Email of the user to be blocked
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User blocked successfully
 *       500:
 *         description: Internal server error
 */
router.patch("/user/block/:email", userController.blockUserByEmail);

/**
 * @swagger
 * /api/user/unblock/{email}:
 *   patch:
 *     summary: Unblock a user by email
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: Email of the user to be unblocked
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User unblocked successfully
 *       500:
 *         description: Internal server error
 */
router.patch("/user/unblock/:email", userController.unBlockUserByEmail);


module.exports = router;
