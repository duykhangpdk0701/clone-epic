const router = require("express").Router();
const ProductModel = require("../model/Product");

router.get("/", async (req, res) => {
  const findProduct = await ProductModel.find().transform((res) => {
    return Object.assign(res, { isMine: "yes" });
  });

  res.status(200).send(findProduct);
});

module.exports = router;
