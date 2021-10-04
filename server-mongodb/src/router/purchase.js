const router = require("express").Router();
const verify = require("./private");

const purchasesController = require("../controller/purchase");

router.get("/find-purchase/:userId", verify);
router.post("/add-purchase");

module.exports = router;
