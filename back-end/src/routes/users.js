const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mysqlConn = require("../config/connectMySql");
const User = require("../models/userModels");
const hashPassword = require("../helpers/hashPassword");

router.get("/", (req, res) => {
  const sql = "SELECT * FROM users";
  mysqlConn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

router.post("/login", async (req, res) => {
  const postItem = await req.body;
  const sql = `SElECT * FROM users WHERE userNames = "${postItem.userNames}"`;

  //hashing password
  const reqHashPassword = await hashPassword(postItem.passwords);
  mysqlConn.query(sql, postItem, async (err, result) => {
    const resPassword = await result[0].passwords;
    if (err) throw err;

    if (result.length === 0) {
      res.send(new User({}, "username is not exist"));
      return;
    } else if (await bcrypt.compare(resPassword, reqHashPassword)) {
      console.log(await bcrypt.compare(resPassword, reqHashPassword));
      res.send(new User({}, "wrong password"));
      return;
    } else {
      const resUser = result[0];
      res.send(new User(resUser, "log in success", true));
      return;
    }
  });
});

router.post("/user", async (req, res) => {
  const reqUser = await req.body;
  const sql = `SELECT * FROM users WHERE userNames = "${reqUser.userNames}"`;
  //hashing password
  const reqHashPassword = await hashPassword(reqUser.userNames);

  mysqlConn.query(sql, reqUser, async (err, result) => {
    const resPassword = await result[0].passwords;
    if (err) throw err;

    if (result.length === 0) {
      res.send(new User({}, "username is not exist"));
      return;
    } else if (await bcrypt.compare(resPassword, reqHashPassword)) {
      console.log(await bcrypt.compare(resPassword, reqHashPassword));
      res.send(new User({}, "wrong password"));
      return;
    } else {
      const resUser = result[0];
      res.send(new User(resUser, "log in success", true));
      return;
    }
  });
});

router.post("/resister", async (req, res) => {
  const postItem = await req.body;
  const sql = `INSERT INTO users WHERE ?`;
  const salt = await bcrypt.genSalt();
  const reqHashPassword = await bcrypt.hash(postItem.passwords, salt);

  mysqlConn.query(sql, postItem, (err, result) => {
    if (err) throw err;
    console.log(reqHashPassword);
  });
});

router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM users WHERE ids = ${req.params.id}`;
  mysqlConn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
