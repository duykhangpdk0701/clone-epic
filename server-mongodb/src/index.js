const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
//import connection DB
const connectDB = require("./config/conn");

//import router
const authRouter = require("./router/auth");
const categoryRouter = require("./router/category");
const postRouter = require("./router/posts");
const productsRouter = require("./router/products");
const wishlistRouter = require("./router/wishlist");

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
app.use("/post", postRouter);
app.use("/products", productsRouter);
app.use("/wishlist", wishlistRouter);

app.get("/", (req, res) => {
  res.send("hello my name is Khang");
});

//app port
app.listen(process.env.PORT, () => {
  console.log("server is running...");
});
