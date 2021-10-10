const router = require("express").Router();
const verify = require("./private");

const wishlistController = require("../controller/wishlist");

router.get(
  "/find-wishlist/:userId",
  verify,
  wishlistController.wishlistGetByUserId,
);
router.post("/add-wishlist", verify, wishlistController.addWishlist);
router.delete("/remove-wishlist", verify, wishlistController.removeWishlist);
router.post("/count-wishlist", verify, wishlistController.countWishlist);

module.exports = router;
