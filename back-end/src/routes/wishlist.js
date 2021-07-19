const express = require("express");
const router = express.Router();
const mysqlConn = require("../config/connectMySql");
const getDate = require("../helpers/getCurrentDate");

router.post("/", async (req, res) => {
  const userId = req.body.userId;
  const sql = `SELECT * FROM wishlist WHERE wishlist.userId = ?`;

  mysqlConn.query(sql, [userId], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.post("/add-wishlist", async (req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;
  const currentDate = getDate();
  const sql = `INSERT INTO wishlist (userId, productId, dateAddToWishlist)
  VALUES (?, ?, ?);`;

  mysqlConn.query(sql, [userId, productId, currentDate], (err, result) => {
    if (err) res.send({ message: "fail" });
    res.send({ message: "success" });
  });
});

router.post("/remove-wishlist", async (req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;
  const sql = `DELETE FROM wishlist WHERE userId = ? AND productId = ?;`;

  mysqlConn.query(sql, [userId, productId], (err, result) => {
    if (err) res.send({ message: "fail" });
    res.send({ message: "success" });
  });
});

module.exports = router;
