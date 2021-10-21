const router = require("express").Router();
const ProductModel = require("../model/Product");
const mongoose = require("mongoose");
const queryString = require("query-string");

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

router.get("/search", async (req, res) => {
  try {
    const search = queryString.parse(req._parsedUrl.search, {
      arrayFormat: "bracket-separator",
      arrayFormatSeparator: "|",
    });

    const product = await ProductModel.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $match: {
          "category.name": { $in: search.tag },
        },
      },
      { $unwind: "$category" },
    ]);
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

module.exports = router;
