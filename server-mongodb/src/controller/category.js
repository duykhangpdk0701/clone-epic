const Category = require("../model/Category");

const getAllCategory = async (req, res) => {
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

const findCategoryById = async (req, res) => {
  try {
    const findCategory = await Category.findById(req.params.id);
    res.status(200).send(findCategory);
  } catch (err) {
    res.status(400).send(err);
  }
};

const findCategoryByName = async (req, res) => {
  try {
    const fineCategory = await Category.findOne({ name: req.params.name });
    res.status(200).send(fineCategory);
  } catch (err) {
    res.status(400).send(err);
  }
};

const updateCategoryByName = async (req, res) => {
  try {
    const updateCategory = await Category.where({ name: req.body.name }).update(
      { description: req.body.description },
    );
    res.status(200).send({ message: "updated category" });
  } catch (err) {
    res.status(400).send({ message: err });
  }
};

module.exports = {
  getAllCategory,
  findCategoryById,
  findCategoryByName,
  updateCategoryByName,
};
