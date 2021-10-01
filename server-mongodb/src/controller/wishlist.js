const WishlistModel = require("../model/Wishlist");

exports.wishlistGetByUserId = async (req, res) => {
  try {
    const findWishlist = await WishlistModel.find({
      userId: req.params.userId,
    });
    res.status(200).send(findWishlist);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

exports.addWishlist = async (req, res) => {
  //checking if wishlist exist
  const wishlistExist = await WishlistModel.findOne({
    userId: req.body.userId,
    productId: req.body.productId,
  });
  if (wishlistExist)
    return res.status(400).send("this wishlist is already exist!");

  try {
    //creating a new wishlist
    const wishlist = new WishlistModel({
      userId: req.body.userId,
      productId: req.body.productId,
    });

    const saveWishlist = await wishlist.save();
    res.status(200).send(wishlist);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

exports.removeWishlist = async (req, res) => {
  try {
    const removeWishlist = await WishlistModel.findOne({
      userId: req.body.userId,
      productId: req.body.productId,
    }).remove();
    res.status(200).send(removeWishlist);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
