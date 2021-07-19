const e = require("express");
const express = require("express");
const router = express.Router();
const mysqlConn = require("../config/connectMySql");
const getDate = require("../helpers/getCurrentDate");

router.post("/", async (req, res) => {
  const userId = req.body.userId;
  console.log(userId);
  const sql = "SELECT * FROM purchase WHERE userId =?;";

  mysqlConn.query(sql, [userId], (err, result) => {
    if (err) res.send({ message: e });
    res.send(result);
  });
});

router.post("/add-purchase", async (req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;
  const currentDate = getDate();
  const sql = `INSERT INTO purchase (userId, productId, purchaseDate)
  VALUES (?, ?, ?);`;

  mysqlConn.query(sql, [userId, productId, currentDate], (err, result) => {
    if (err) res.send({ message: err });
    res.send({ message: "success" });
  });
});

router.post("/remove-purchase", async (req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;
  const sql = `DELETE FROM purchase WHERE userId = ? AND productId = ?;`;

  mysqlConn.query(sql, [userId, productId], (err, result) => {
    if (err) res.send({ message: err });
    res.send({ message: "success" });
  });
});

module.exports = router;
