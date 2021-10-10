const mongoose = require("mongoose");

const WishlistSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      require: true,
      ref: "User",
    },
    product: {
      type: mongoose.Types.ObjectId,
      require: true,
      ref: "Product",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Wishlist", WishlistSchema, "wishlists");
