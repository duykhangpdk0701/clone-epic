const WishlistModel = require("../model/Wishlist");

exports.wishlistGetByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const findWishlist = await WishlistModel.find({ userId }).populate({
      path: "product",
      select: ["_id", "name"],
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
    userId,
    productId,
  });
  if (wishlistExist)
    return res.status(400).send("this wishlist is already exist!");

  try {
    //creating a new wishlist
    const wishlist = new WishlistModel({
      user: userId,
      product: productId,
    });

    const saveWishlist = await wishlist.save();
    res.status(200).send(wishlist);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

exports.removeWishlist = async (req, res) => {
  try {
    const userId = req.body.userId;
    const productId = req.body.productId;
    //find wishlist and delete
    const removeWishlist = await WishlistModel.findOne({
      user: userId,
      product: productId,
    }).deleteOne();
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
