const router = require("express").Router();
const productsController = require("../controller/products");

router.get("/", productsController.productsGetAll);
router.post("/add-products", productsController.productAdd);
router.post(
  "/find-product-by-ids",
  productsController.findProductByCategoryIds,
);

module.exports = router;
