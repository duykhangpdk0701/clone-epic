const express = require("express");
const router = express.Router();
const mysqlConn = require("../config/connectMySql");

router.get("/", (req, res) => {
  const sql = "SELECT * FROM products";
  mysqlConn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

router.post("/", (req, res) => {
  const userId = req.body.userId;
  const sql = `SELECT 
    products.*,
    CASE
        WHEN purchases.id IS NOT NULL THEN 1
        ELSE 0
    END purchased,
    CASE
        WHEN wishlist.id IS NOT NULL THEN 1
        ELSE 0
    END addWishlist
FROM
    purchases
        RIGHT JOIN
    products ON products.id = purchases.productsId
        AND purchases.usersId = ?;
        LEFT JOIN
    wishlist ON products.id = wishlist.productId
        AND wishlist.userId = ?;`;

  mysqlConn.query(sql, [userId], (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM products WHERE id = ?;`;
  mysqlConn.query(sql, [id], (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;
