const router = require("express").Router();
const ProductModel = require("../model/Product");
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  try {
    const findProduct = await ProductModel.aggregate([
      {
        $lookup: {
          from: "wishlists",
          as: "isInWishlist",

          pipeline: [
            {
              $match: {
                $and: [
                  {
                    user: mongoose.Types.ObjectId("6161849a4c03b47a614d015e"),
                  },
                  { $expr: { $eq: ["$_id", "$isInWishlist.product"] } },
                  // {
                  //   product: "$product",
                  // },
                ],
              },
            },
          ],
        },
      },

      {
        $lookup: {
          from: "products",
          as: "isInProduct",
          pipeline: [
            {
              $match: {
                user: mongoose.Types.ObjectId("6161849a4c03b47a614d015e"),
              },
            },
          ],
        },
      },
      { $unwind: "$isInWishlist" },
      { $unwind: "$isInProduct" },
    ]);

    res.status(200).send(findProduct);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error });
  }
});

module.exports = router;
