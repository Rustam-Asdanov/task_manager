const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  addUser,
  getUserById,
  updateUserData,
  deleteUserById,
} = require("../controllers/users");

router.route("/").get(getAllUsers).post(addUser);

router
  .route("/:id")
  .get(getUserById)
  .put(updateUserData)
  .delete(deleteUserById);

module.exports = router;
