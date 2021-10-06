const router = require("express").Router();
const ProductModel = require("../model/User");

router.get("/", async (req, res) => {
  const findProduct = await ProductModel.find().populate({
    path: "wishlists",
  });
  res.status(200).send(findProduct);
});

module.exports = router;
