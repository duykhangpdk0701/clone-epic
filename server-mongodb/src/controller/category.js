const Category = require("../model/Category");

exports.getAllCategory = async (req, res) => {
  try {
    const findCategory = await Category.find();
    res.status(200).send(findCategory);
  } catch (error) {
    res.status(400).send({ message: err });
  }
};

exports.addCategory = async (req, res) => {
  const category = new Category({
    name: req.body.name,
    description: req.body.description,
  });
  try {
    const saveCategory = await category.save(() =>
      console.log("inserted category to db"),
    );
    res.status(200).send({ message: "inserted category" });
  } catch (err) {
    res.status(400).send({ message: err });
  }
};

exports.findCategoryById = async (req, res) => {
  try {
    const findCategory = await Category.findById(req.params.id);
    res.status(200).send(findCategory);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.findCategoryByName = async (req, res) => {
  try {
    const fineCategory = await Category.findOne({ name: req.params.name });
    res.status(200).send(fineCategory);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updateCategoryByName = async (req, res) => {
  try {
    const updateCategory = await Category.where({ name: req.body.name }).update(
      { description: req.body.description },
    );
    res.status(200).send({ message: "updated category" });
  } catch (err) {
    res.status(400).send({ message: err });
  }
};
