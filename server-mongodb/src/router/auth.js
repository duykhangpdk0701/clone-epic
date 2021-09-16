const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.post("/register", userController.userRegister);

router.post("/login", userController.userLogin);

router.get("/:id", userController.userFindById);

router.get("/find-by-name/:name", userController.userFindByName);

module.exports = router;
