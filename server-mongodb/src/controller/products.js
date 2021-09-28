const ProductModel = require("../model/Product");

exports.productsGetAll = async (req, res) => {
  try {
    const findProduct = await ProductModel.find();
    res.status(200).send(findProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.productAdd = async (req, res) => {
  //checking if product exist
  const nameExist = await ProductModel.findOne({ name: req.body.name });
  if (nameExist)
    return res.status(400).send("Product's name is already exist!");

  //creating a new product
  const product = new ProductModel({
    name: req.body.name,
  });
  try {
    const saveProduct = await product.save();
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

exports.findProductByCategoryIds = async (req, res) => {
  try {
    const findProducts = await ProductModel.find({
      categoryId: { $all: [req.body.categoryIds] },
    });
    res.status(200).send(findProducts);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getById = async (req, res) => {
  try {
    const productId = req.params.id;
    const findProduct = await ProductModel.findById(productId);
    res.status(200).send(findProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};
