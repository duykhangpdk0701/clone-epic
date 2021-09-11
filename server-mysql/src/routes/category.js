const express = require("express");
const router = express.Router();
const mysqlConn = require("../config/connectMySql");

router.post("/", async (req, res) => {
  const sql = `SELECT * FROM category`;

  mysqlConn.query(sql, (err, result) => {
    if (err) res.send({ message: "fail" });
    res.send(result);
  });
});

module.exports = router;
