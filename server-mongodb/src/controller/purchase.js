const PurchaseModel = require("../model/Purchase");

exports.purchaseGetAll = async (req, res) => {
  try {
    const findPurchase = await PurchaseModel.find();
    res.status(200).send(findPurchase);
  } catch (error) {
    res.status(400).send(error);
  }
};
