const express = require("express");
const app = express();
const mongoose = require("mongoose");
//router
const userRouter = require("./router/user");
require("dotenv").config();

app.use("/user", userRouter);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello my name is Khang");
});

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to DB");
});

app.listen(process.env.PORT, () => {
  console.log("server is running...");
});
