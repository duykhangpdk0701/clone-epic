const router = require("express").Router();
const productsController = require("../controller/products");

router.get("/", productsController.productsGetAll);
router.get("/:id", productsController.getById);
router.post("/add-products", productsController.productAdd);
router.post(
  "/find-product-by-ids",
  productsController.findProductByCategoryIds,
);
router.post("/update", productsController.updateProductById);

module.exports = router;
