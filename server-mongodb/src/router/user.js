const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.post("/register", userController.userRegister);

router.get("/:id", userController.userFindById);

module.exports = router;
