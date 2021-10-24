const ProductModel = require("../model/Product");
const queryString = require("query-string");
const toSortMongoValue = require("../helper/toSortMongoValue");

exports.productsGetAll = async (req, res) => {
  try {
    const search = queryString.parse(req._parsedUrl.search, {
      arrayFormat: "bracket-separator",
      arrayFormatSeparator: "|",
    });

    const searchParams = search.q || "";
    //  checking if request has no search url, if it true then send all products
    if (!search.tag) {
      const findProduct = await ProductModel.aggregate([
        { $sort: toSortMongoValue(search.sortBy) },
        { $match: { name: { $regex: searchParams, $options: "i" } } },
      ]);

      res.status(200).send(findProduct);
      return;
    }

    const findProductWithSearch = await ProductModel.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },

      {
        $match: {
          $and: [
            { name: { $regex: searchParams, $options: "i" } },
            {
              "category.name": { $in: search.tag },
            },
          ],
        },
      },
      { $sort: toSortMongoValue(search.sortBy) },
      { $unwind: "$category" },
    ]);
    res.status(200).send(findProductWithSearch);
  } catch (error) {
    res.status(400).send({ message: error });
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
    category: req.body.category,
    price: req.body.price,
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

exports.updateProductById = async (req, res) => {
  try {
    const productId = req.body._id;
    const productUpdate = req.body.update;
    const updateProduct = await ProductModel.findByIdAndUpdate(
      productId,
      productUpdate,
      { new: true },
    );

    res.status(200).send(updateProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};
