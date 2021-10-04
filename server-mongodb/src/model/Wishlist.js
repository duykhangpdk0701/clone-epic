const mongoose = require("mongoose");

const WishlistSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      require: true,
      ref: "User",
    },
    productId: {
      type: mongoose.Types.ObjectId,
      require: true,
      ref: "Product",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Wishlist", WishlistSchema, "wishlists");
