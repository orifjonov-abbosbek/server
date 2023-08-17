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
 * /api/users/{id}/block:
 *   put:
 *     summary: Block a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to be blocked
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User blocked successfully
 *       500:
 *         description: Internal server error
 */
router.put("/users/:id/block", userController.blockUser);

/**
 * @swagger
 * /api/users/{id}/unblock:
 *   put:
 *     summary: Unblock a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to be unblocked
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User unblocked successfully
 *       500:
 *         description: Internal server error
 */
router.put("/users/:id/unblock", userController.unBlockUser);

module.exports = router;
