const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
//import connection DB
const connectDB = require("./config/conn");

//import router
const authRouter = require("./router/auth");
const categoryRouter = require("./router/category");
const post = require("./router/posts");
const products = require("./router/products");
//use middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
);
app.use(express.json());

//connect to DB
connectDB();

//middleware router
app.use("/auth", authRouter);
app.use("/category", categoryRouter);
app.use("/post", post);
app.use("/products", products);

app.get("/", (req, res) => {
  res.send("hello my name is Khang");
});

//app port
app.listen(process.env.PORT, () => {
  console.log("server is running...");
});
