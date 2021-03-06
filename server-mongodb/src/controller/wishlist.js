const WishlistModel = require("../model/Wishlist");
const mongoose = require("mongoose");

exports.wishlistGetByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const findWishlist = await WishlistModel.find({ userId }).populate({
      path: "product",
    });

    res.status(200).send(findWishlist);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

exports.addWishlist = async (req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;

  //checking if wishlist exist
  const wishlistExist = await WishlistModel.findOne({
    user: mongoose.Types.ObjectId(userId),
    product: mongoose.Types.ObjectId(productId),
  });
  if (wishlistExist) {
    return res.status(400).send("this wishlist is already exist!");
  }

  try {
    //creating a new wishlist
    const wishlist = new WishlistModel({
      user: userId,
      product: productId,
    });

    const saveWishlist = await wishlist.save();
    const sendWishlist = await WishlistModel.aggregate([
      {
        $match: {
          $and: [
            { product: mongoose.Types.ObjectId(productId) },
            { user: mongoose.Types.ObjectId(userId) },
          ],
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "product",
          foreignField: "_id",
          as: "product",
        },
      },
      { $unwind: "$product" },
    ]).then((wishlist) => wishlist[0]);

    res.status(200).send(sendWishlist);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

exports.removeWishlist = async (req, res) => {
  try {
    const { id } = req.body;
    //find wishlist and delete
    const removeWishlist = await WishlistModel.deleteOne({
      _id: id,
    });
    res.status(200).send(removeWishlist);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

exports.countWishlist = async (req, res) => {
  try {
    const userId = req.body.userId;
    const countWishlist = await WishlistModel.count({
      user: userId,
    });
    res.status(200).send({ countWishlist });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
