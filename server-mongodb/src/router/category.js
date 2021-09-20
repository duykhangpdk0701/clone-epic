const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category");

router.post("/", categoryController.addCategory);

router.get("/:id", categoryController.findCategoryById);

router.get("/find-by-name/:name", categoryController.findCategoryByName);

router.post("/update-by-name", categoryController.updateCategoryByName);

module.exports = router;
