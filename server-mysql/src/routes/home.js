const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "this is home page" });
});

module.exports = router;
