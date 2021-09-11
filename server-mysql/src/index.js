const express = require("express");
const app = express();
const accountRouter = require("./routes/users");
const productRouter = require("./routes/products");
const homeRoute = require("./routes/home");
const wishlistRoute = require("./routes/wishlist");
const purchaseRoute = require("./routes/purchase");
const category = require("./routes/category");
const cors = require("cors");

app.use(
  cors({
    origin: `${process.env.ORIGIN_CLIENT}`,
  }),
);
app.use(express.json());

app.use("/", homeRoute);
app.use("/users", accountRouter);
app.use("/products", productRouter);
app.use("/wishlist", wishlistRoute);
app.use("/purchase", purchaseRoute);
app.use("/category");

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("connect success");
});
