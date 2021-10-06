const router = require("express").Router();
const ProductModel = require("../model/Product");

router.get("/", async (req, res) => {
  const findProduct = await ProductModel.aggregate([
    {
      $match: { category: "613e0ec685d718ee126196ef" },
    },
  ]);
  res.status(200).send(findProduct);
});

module.exports = router;
