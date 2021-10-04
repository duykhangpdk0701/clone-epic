const mongoose = require("mongoose");

const PurchaseSchema = mongoose.Schema(
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
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Purchase", PurchaseSchema, "purchases");
