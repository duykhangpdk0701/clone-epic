const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.get("/addUser", async (req, res) => {
  res.send("this is addUser Page");
});

router.post("/addUser", async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  try {
    const savedUser = await user.save(() => console.log("inserted to db"));
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
