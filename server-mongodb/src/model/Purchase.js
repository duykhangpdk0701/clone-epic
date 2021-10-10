const mongoose = require("mongoose");

const PurchaseSchema = mongoose.Schema(
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

module.exports = mongoose.model("Purchase", PurchaseSchema, "purchases");
