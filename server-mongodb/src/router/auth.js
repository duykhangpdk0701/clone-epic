const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");

router.post("/register", authController.userRegister);

router.post("/login", authController.userLogin);

router.get("/:id", authController.userFindById);

router.get("/find-by-name/:name", authController.userFindByName);

module.exports = router;
