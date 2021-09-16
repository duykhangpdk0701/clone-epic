const express = require("express");
const app = express();
require("dotenv").config();
//import connection DB
const connectDB = require("./config/conn");

//import router
const authRouter = require("./router/auth");
const categoryRouter = require("./router/category");

//use middleware
app.use(express.json());

//connect to DB
connectDB();

//middleware router
app.use("/auth", authRouter);
app.use("/category", categoryRouter);

app.get("/", (req, res) => {
  res.send("hello my name is Khang");
});

//app port
app.listen(process.env.PORT, () => {
  console.log("server is running...");
});
