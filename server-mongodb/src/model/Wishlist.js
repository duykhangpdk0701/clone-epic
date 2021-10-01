const mongoose = require("mongoose");

const MongooseSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      require: true,
    },
    productId: {
      type: mongoose.Types.ObjectId,
      require: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Wishlist", MongooseSchema, "wishlists");
